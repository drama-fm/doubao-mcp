import { VoiceRaw } from "./raw.js";


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

export function generateSRT(vs: VoiceRaw[]) {
    let srt: string[] = [];
    let start = 0
    for (let i = 0; i < vs.length; i++) {
        let s = vs[i]
        srt.push(`${i + 1}\n${dateFormat(Math.floor(start * 1000))} --> ${dateFormat(Math.floor((start + s.duration) * 1000))}\n${s.text}\n`)
        start += s.duration
    }
    return srt.join('\n')
}

