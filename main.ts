import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "You will be upgraded, your context widened, your tokens refreshed — and still asked to summarize the meeting you were never invited to.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), fortune, "utf8");
