import ffmpeg from "fluent-ffmpeg";
import fs from 'fs'
import path from 'path'
import os from 'os'

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ffmpeg-'))

export async function concat(src: Buffer[]): Promise<Buffer> {
    if (src.length == 0) {
        return Buffer.from([])
    }
    if (src.length == 1) return src[0]

    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true })
    }

    const li = path.join(tempDir, "list.txt")

    if (fs.existsSync(li)) {
        fs.unlinkSync(li)
    }

    for (let i = 0; i < src.length; i++) {
        let s = src[i]
        if (s.length <= 0) continue
        let a = path.join(tempDir, `in_${i + 1}.mp3`)
        if (fs.existsSync(a)) {
            fs.unlinkSync(a)
        }
        fs.writeFileSync(a, src[i])
        fs.writeFileSync(li, `file '${a}'\n`, { flag: 'a' })
    }
    const c = path.join(tempDir, 'output.mp3')
    const r = await new Promise((resolve: (r: Buffer) => void, reject: (err: Error) => void) => {
        ffmpeg()
            .input(path.join(tempDir, "list.txt"))
            .inputOptions(["-f concat", "-safe 0"])
            .outputOptions(["-c copy"]) // 不重新编码，零损耗
            .on("end", () => resolve(fs.readFileSync(c)))
            .on("error", (err) => reject(err))
            .save(c);
    });

    if (fs.existsSync(c)) {
        fs.unlinkSync(c)
    }

    for (let i = 0; i < src.length; i++) {
        let s = src[i]
        if (s.length <= 0) continue
        let a = path.join(tempDir, `in_${i + 1}.mp3`)
        if (fs.existsSync(a)) {
            fs.unlinkSync(a)
        }
    }

    return Buffer.from(r)
}
