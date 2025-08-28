
const MODEL = process.env.DOUBAO_IMAGE_MODEL || "doubao-seedream-3-0-t2i-250415"

export async function generateImage(apikey: string, prompt: string, size: string = "1024x1024", seed: number = -1, guidance_scale: number = 0.25): Promise<string> {
    const rs = await fetch("https://ark.cn-beijing.volces.com/api/v3/images/generations", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apikey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": prompt,
            "seed": seed,
            "model": MODEL,
            "size": size,
            "guidance_scale": guidance_scale,
            "watermark": false,
            "response_format": "b64_json"
        })
    })
    const r = await rs.json()
    if (r.error) {
        throw new Error(`[${r.error.code}] ${r.error.message}`)
    }
    return r.data[0].b64_json
}
