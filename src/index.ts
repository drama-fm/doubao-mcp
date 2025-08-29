#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { generateImage } from "./image.js";
import fs from 'fs'
import { generateSRT, generateVoiceData, generateVoiceRaw } from "./voice.js";
import { speakers } from "./spaker.js";
import { generateSSML } from "./ssml.js";

let _apikey: string | undefined = undefined

// Create server instance
const server = new McpServer({
  name: "Doubao MCP Server",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});


server.tool("doubaoGenerateImage",
  "Doubao Generate Image",
  {
    prompt: z.string().describe("Prompt"),
    size: z.string().describe("Image Size of 1024x1024,864x1152,1152x864,1280x720,720x1280,832x1248,1248x832,1512x648"),
    seed: z.number().describe("Controls the randomness of the model's output. Valid range is [-1, 2147483647], with a default value of -1, which automatically generates a random seed."),
    guidance_scale: z.number().describe("Controls the balance between the prompt and the generated image. Valid range is [0.1, 10], with a default value of 0.25."),
  },
  async ({ prompt, size, seed, guidance_scale }) => {
    const data = await generateImage(_apikey!, prompt, size, seed, guidance_scale).catch((e) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: "image",
          data: data,
          mimeType: "image/jpeg",
        },
      ],
    };
  },)


server.tool("doubaoGenerateImageToFile",
  "Doubao Generate Image To File",
  {
    prompt: z.string().describe("Prompt"),
    size: z.string().describe("Image Size of 1024x1024,864x1152,1152x864,1280x720,720x1280,832x1248,1248x832,1512x648"),
    seed: z.number().describe("Controls the randomness of the model's output. Valid range is [-1, 2147483647], with a default value of -1, which automatically generates a random seed."),
    guidance_scale: z.number().describe("Controls the balance between the prompt and the generated image. Valid range is [0.1, 10], with a default value of 0.25."),
    dstFilePath: z.string().describe("Destination File Path"),
  },
  async ({ prompt, size, seed, guidance_scale, dstFilePath }) => {
    const data = await generateImage(_apikey!, prompt, size, seed, guidance_scale).catch((e) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    fs.writeFileSync(dstFilePath, Buffer.from(data, 'base64'))
    return {
      content: [
        {
          type: "text",
          text: "Image saved to " + dstFilePath
        },
      ],
    };
  },)

server.tool("getDoubaoVoiceSpeakers",
  "Get Doubao Voice Speakers and Emotion",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(speakers)
        },
      ],
    };
  })


server.tool("getDoubaoSSMLSchema",
  "Get Doubao SSML Schema",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: `SSML file containing episode dialogue information.
It includes the fm:prompt attribute and tags such as <mark name="IMAGE_{image_id}" fm:prompt="Image prompt" />
<voice name="{speaker_name}" fm:speaker-id="{speaker_id}"></voice>
<fm:emotion name="{emotion_id}">{subtext}</fm:emotion> (Text with emotion)
<s>{subtext}</s> (Ordinary text)
Here, image_id values are integers that should be at least two digits long, padded with leading zeros if necessary.`
        },
      ],
    };
  })

server.tool("doubaoGenerateVoice",
  "Doubao Generate Voice MP3 Data and Subtitles(SRT)",
  {
    text: z.string().describe("Text"),
    speakerId: z.string().describe("Speaker ID obtained from getDoubaoVoiceSpeakers"),
  },
  async ({ text, speakerId }) => {
    const data = await generateVoiceRaw(text, speakerId).catch((e: any) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: "audio",
          data: generateVoiceData(data.data),
          mimeType: "audio/mpeg",
        },
        {
          type: "text",
          text: "```srt\n" + generateSRT(data.subtitle) + "\n```\n\n"
        },
      ],
    };
  },)

server.tool("doubaoGenerateVoiceToFile",
  "Doubao Generate Voice to MP3 File and Subtitle File(SRT)",
  {
    text: z.string().describe("Text"),
    speakerId: z.string().describe("Speaker ID obtained from getDoubaoVoiceSpeakers"),
    dstFilePath: z.string().describe("Destination File Path"),
    dstSrtFilePath: z.string().describe("Destination SRT File Path"),
  },
  async ({ text, speakerId, dstFilePath, dstSrtFilePath }) => {
    const data = await generateVoiceRaw(text, speakerId).catch((e) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    fs.writeFileSync(dstFilePath, Buffer.concat(data.data))
    fs.writeFileSync(dstSrtFilePath, generateSRT(data.subtitle))
    return {
      content: [
        {
          type: "text",
          text: "Voice saved to " + dstFilePath + "\n\nSRT saved to " + dstSrtFilePath
        },
      ],
    };
  },)



server.tool("doubaoGenerateSSMLVoice",
  "Doubao Generate SSML Voice MP3 Data and Subtitles(SRT)",
  {
    ssmlContent: z.string().describe("Voice SSML Content"),
  },
  async ({ ssmlContent }) => {
    const data = await generateSSML(ssmlContent).catch((e: any) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: "audio",
          data: generateVoiceData(data.data),
          mimeType: "audio/mpeg",
        },
        {
          type: "text",
          text: "```srt\n" + generateSRT(data.subtitle) + "\n```\n\n"
        },
      ],
    };
  },)

server.tool("doubaoGenerateSSMLVoiceToFile",
  "Doubao Generate SSML Voice to MP3 File and Subtitle File(SRT)",
  {
    ssmlContent: z.string().describe("Voice SSML Content"),
    dstFilePath: z.string().describe("Destination File Path"),
    dstSrtFilePath: z.string().describe("Destination SRT File Path"),
  },
  async ({ ssmlContent, dstFilePath, dstSrtFilePath }) => {
    const data = await generateSSML(ssmlContent).catch((e) => e)
    if (data instanceof Error) {
      return {
        content: [
          {
            type: "text",
            text: 'Error: ' + data,
          },
        ],
      };
    }
    fs.writeFileSync(dstFilePath, Buffer.concat(data.data))
    fs.writeFileSync(dstSrtFilePath, generateSRT(data.subtitle))
    return {
      content: [
        {
          type: "text",
          text: "Voice saved to " + dstFilePath + "\n\nSRT saved to " + dstSrtFilePath
        },
      ],
    };
  },)

async function main() {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] == '--api-key' && i + 1 < process.argv.length) {
      _apikey = process.argv[i + 1]
      i++
    }
  }

  if (!_apikey) {
    console.error("Error: --api-key is required");
    process.exit(1);
  }

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Doubao MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});