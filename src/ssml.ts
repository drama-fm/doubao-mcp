import { speakers } from "./spaker.js";
import { appendVoiceRaw, generateVoiceRaw, VoiceRaw } from "./voice.js";
import { DOMParser } from "@xmldom/xmldom";

async function generateSSMLBySpeakerId(dst: VoiceRaw, p: Element, speakerId: string, emotion?: string): Promise<void> {
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
                    let src = await generateVoiceRaw(v.textContent, speakerId, emotion)
                    appendVoiceRaw(dst, src)
                }
            }
        }
        v = v.nextSibling
    }
}

export async function generateSSML(text: string): Promise<VoiceRaw> {
    const doc = new DOMParser().parseFromString(text, "text/xml");
    const speak = doc.getElementsByTagName("speak")[0] as HTMLElement
    if (!speak) {
        throw new Error("No speak tag found")
    }
    const dst: VoiceRaw = {
        data: [],
        subtitle: []
    }
    let p = speak.firstChild
    while (p) {
        if (p.nodeType === 1 && p.nodeName === "voice") {
            const el = p as Element
            const speakerId = el.getAttribute("fm:speaker-id")
            if (speakerId) {
                await generateSSMLBySpeakerId(dst, el, speakerId)
            }
        }
        p = p.nextSibling
    }

    return dst
}