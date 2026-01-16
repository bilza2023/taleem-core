import { build } from "esbuild";
import fs from "fs";

const dist = "dist";

// clean dist
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// ---- JS: ESM build ----
await build({
    entryPoints: ["src/index.browser.js"],
    outfile: "dist/taleem-core.esm.js",
    bundle: true,
    format: "esm",
    platform: "browser",
    sourcemap: false
  });
  

console.log("✔ taleem-core build complete");
