import { randomUUID } from "node:crypto"
import ffmpeg from "fluent-ffmpeg";
import fs from "fs"
import path from "node:path";
import os from "node:os"

export interface Subtitle {
    start: number
    end: number
    text: string
}

export interface VoiceRaw {
    data: Buffer[]
    subtitle: Subtitle[]
}

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ffmpeg-'))

export async function appendVoiceRaw(dst: VoiceRaw, src: VoiceRaw): Promise<void> {
    if (dst.data.length == 0) {
        dst.data = [...src.data]
    } else if (src.data.length != 0) {
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true })
        }
        const a = path.join(tempDir, 'input1.mp3')
        const b = path.join(tempDir, 'input2.mp3')
        const c = path.join(tempDir, 'output.mp3')
        const li = path.join(tempDir, "list.txt")
        if (fs.existsSync(c)) {
            fs.unlinkSync(c)
        }
        fs.writeFileSync(a, Buffer.concat(dst.data))
        fs.writeFileSync(b, Buffer.concat(src.data))
        fs.writeFileSync(li, `file '${a}'\nfile '${b}'\n`)
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
        if (fs.existsSync(a)) {
            fs.unlinkSync(a)
        }
        if (fs.existsSync(b)) {
            fs.unlinkSync(b)
        }

        dst.data = [Buffer.from(r)]
    }

    let endTime = 0
    if (dst.subtitle.length > 0) {
        endTime = dst.subtitle[dst.subtitle.length - 1].end
    }
    for (let s of src.subtitle) {
        s.start += endTime
        s.end += endTime
    }
    dst.subtitle.push(...src.subtitle)
}

export const ResouceId = process.env.DOUBAO_VOICE_RESOURCE_ID || 'volc.service_type.10029'
export const AppId = process.env.DOUBAO_VOICE_APP_ID
export const AccessToken = process.env.DOUBAO_VOICE_ACCESS_TOKEN

export async function generateVoiceRaw(text: string, speakerId: string, emotionId?: string): Promise<VoiceRaw> {
    const url = "https://openspeech.bytedance.com/api/v3/tts/unidirectional";
    const headers: Record<string, string> = {
        "X-Api-App-Id": AppId!,
        "X-Api-Access-Key": AccessToken!,
        "X-Api-Resource-Id": ResouceId, // 这个参数在Python示例中为空，根据实际情况可能需要配置
        "X-Api-Request-Id": randomUUID(),
        "Content-Type": "application/json"
    };

    const payload = {
        "user": {
            "uid": "123123"
        },
        "req_params": {
            "text": text,
            "speaker": speakerId,
            "audio_params": {
                "format": "mp3",
                "sample_rate": 24000,
                "enable_timestamp": true,
                "emotion": emotionId
            },
            "additions": '{"explicit_language":"zh","disable_markdown_filter":true, "enable_timestamp":true}'
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        let text = await response.text()

        const lines = text.split('\n');
        const totalAudio: Buffer[] = []
        const subtitle: Subtitle[] = []

        for (let line of lines) {
            if (line == '') {
                continue
            }
            let data = JSON.parse(line)
            if (data.code === 20000000) {
                break;
            } else if (data.code != 0) {
                throw new Error(`API error: ${JSON.stringify(data)}`)
            } else {
                if (data.data) {
                    totalAudio.push(Buffer.from(data.data, "base64"))
                }
                if (data.sentence) {
                    let startTime = 0
                    let endTime = 0
                    for (let w of data.sentence.words) {
                        if (startTime == 0 || w.startTime < startTime) {
                            startTime = w.startTime
                        }
                        if (endTime == 0 || w.endTime > endTime) {
                            endTime = w.endTime
                        }
                    }
                    subtitle.push({
                        start: startTime,
                        end: endTime,
                        text: data.sentence.text
                    })
                }
            }
        }

        return {
            data: totalAudio,
            subtitle: subtitle
        };
    } catch (error) {
        console.error("Error generating voice:", error);
        throw error;
    }
}


function formatNumber(v: number, minLength: number = 2) {
    let s = v.toString();
    while (s.length < minLength) {
        s = '0' + s
    }
    return s
}

function dateFormat(millis: number) {
    return `${formatNumber(Math.floor(millis / 3600000) % 60, 2)}:${formatNumber(Math.floor(millis / 60000) % 60, 2)}:${formatNumber(Math.floor(millis / 1000) % 60, 2)}.${formatNumber(millis % 1000, 3)}`
}

export function generateSRT(subtitle: Subtitle[]) {
    let srt: string[] = [];
    for (let i = 0; i < subtitle.length; i++) {
        let s = subtitle[i]
        srt.push(`${i + 1}\n${dateFormat(Math.floor(s.start * 1000))} --> ${dateFormat(Math.floor(s.end * 1000))}\n${s.text}\n`)
    }
    return srt.join('\n')
}

export function generateVoiceData(audio: Buffer[]) {
    return Buffer.concat(audio).toString('base64')
}
