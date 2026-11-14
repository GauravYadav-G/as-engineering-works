import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { applicationAssets, machineAssets } from "../src/data/media";

const assets = [...Object.values(machineAssets), ...Object.values(applicationAssets)];

for (const asset of assets) {
  const target = join(process.cwd(), "public", asset.path);
  if (existsSync(target) && statSync(target).size > 2000) {
    console.log(`✓ already saved ${asset.path}`);
    continue;
  }

  mkdirSync(join(target, ".."), { recursive: true });
  try {
    execFileSync("curl", ["-fLsS", "--retry", "2", "--max-time", "30", asset.source, "-o", target], {
      stdio: "pipe",
    });
    if (statSync(target).size < 2000) throw new Error("Unexpectedly small file");
    console.log(`✓ downloaded ${asset.path} (${Math.ceil(statSync(target).size / 1024)} KB)`);
  } catch (error) {
    console.error(`✗ failed ${asset.path} from ${asset.source}`, error);
    process.exitCode = 1;
  }
}
