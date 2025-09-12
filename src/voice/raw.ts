import { randomUUID } from "node:crypto";
import * as mm from 'music-metadata';

export const ApiKey = process.env.DOUBAO_TTS_API_KEY

export interface VoiceRaw {
    data: Buffer
    text: string
    duration: number
}

export async function generateVoiceRaw(text: string, speakerId: string, emotion?: string, emotion_scale: number = 4, speech_rate: number = 0, loudness_rate: number = 0): Promise<VoiceRaw> {
    if (!ApiKey) {
        throw new Error("DOUBAO_TTS_API_KEY is not set")
    }
    const url = "https://openspeech.bytedance.com/api/v3/tts/unidirectional";
    const headers: Record<string, string> = {
        "x-api-key": ApiKey,
        "X-Api-Resource-Id": 'volc.service_type.10029', // 这个参数在Python示例中为空，根据实际情况可能需要配置
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
            "model": "seed-tts-1.1",
            "audio_params": {
                "format": "mp3",
                "sample_rate": 24000,
                "enable_timestamp": false,
                "emotion": emotion,
                "emotion_scale": emotion_scale,
                "speech_rate": speech_rate,
                "loudness_rate": loudness_rate
            },
            "additions": '{"disable_markdown_filter":true, "enable_timestamp":true}'
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


        let s = await response.text()

        const lines = s.split('\n');
        const totalAudio: Buffer[] = []

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
            }
        }

        const data = Buffer.concat(totalAudio)
        const metadata = await mm.parseBuffer(data, 'audio/mpeg');
        const duration = metadata.format.duration; // 时长（秒）

        return {
            data: data,
            text: text,
            duration: duration ?? 0
        };
    } catch (error) {
        console.error("Error generating voice:", error);
        throw error;
    }
}