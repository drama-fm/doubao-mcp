import fs from "fs"
import { generateSSML } from "./ssml.js";

async function main() {
    const ssml = await generateSSML(fs.readFileSync("/Volumes/SSD_1T/src/drama-fm/divorced/EP_01_zh-CN.ssml", "utf-8"))
    fs.writeFileSync("test.mp3", Buffer.concat(ssml.data))
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});

