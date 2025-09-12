import { speakers } from "./speaker.js";
import { generateVoiceRaw, VoiceRaw } from "./raw.js";
import { DOMParser } from "@xmldom/xmldom";
import { concat } from "./concat.js";
import { generateSRT } from "./srt.js";

async function generateSSMLBySpeakerId(dst: VoiceRaw[], p: Element, speakerId: string, emotion?: string): Promise<void> {
    let v = p.firstChild
    while (v) {
        if (v.nodeType === 1) {
            const s = v as Element
            if (s.tagName === "fm:emotion") {
                emotion = s.getAttribute("name") ?? undefined
                if (emotion) {
                    let speaker = speakers.find(s => s.id === speakerId)
                    if (speaker) {
                        if (!speaker.emotions?.find(e => e.id === emotion)) {
                            emotion = undefined
                        }
                    } else {
                        emotion = undefined
                    }
                }
                await generateSSMLBySpeakerId(dst, s, speakerId, emotion)
            } else {
                await generateSSMLBySpeakerId(dst, s, speakerId, emotion)
            }
        } else if (v.nodeType === 3) {
            if (v.textContent) {
                let text = v.textContent.trim()
                if (text.length > 0) {
                    console.info(speakerId, "=>", text)
                    let src = await generateVoiceRaw(v.textContent, speakerId, emotion)
                    dst.push(src)
                }
            }
        }
        v = v.nextSibling
    }
}

export interface SSMLVoice {
    data: Buffer
    srt: string
    duration: number
}

export async function generateSSML(text: string): Promise<SSMLVoice> {
    const doc = new DOMParser().parseFromString(text, "text/xml");
    const speak = doc.getElementsByTagName("speak")[0] as HTMLElement
    if (!speak) {
        throw new Error("No speak tag found")
    }
    const dst: VoiceRaw[] = []
    let p = speak.firstChild
    while (p) {
        if (p.nodeType === 1 && p.nodeName === "voice") {
            const el = p as Element
            const speakerId = el.getAttribute("fm:speaker-id")
            if (speakerId) {
                await generateSSMLBySpeakerId(dst, el, speakerId)
            }
        } else if (p.nodeType === 1 && p.nodeName === 'mark') {
            const el = p as Element
            const name = el.getAttribute("name")
            if (name) {
                dst.push({ data: Buffer.from([]), text: `<${name}>`, duration: 0 })
            }
        }
        p = p.nextSibling
    }

    const data = await concat(dst.map(s => s.data))
    const srt = generateSRT(dst)
    return {
        data,
        srt,
        duration: dst.reduce((p, c) => p + c.duration, 0)
    }
}