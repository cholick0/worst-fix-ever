// Worst Fix Ever: Funniest Commit Message
// Writes the entry (a commit message) to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed the bug by deleting the feature. No feature, no bug. You're welcome.";

// Self-check gate: entry must be 1-100 chars, a single line, not blank.
function selfCheck(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 100) {
    throw new Error(`entry is ${chars.length} chars, must be 1-100`);
  }
  if (text.includes("\n") || text.trim().length === 0) {
    throw new Error("entry must be one non-blank line");
  }
}

selfCheck(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: what was written must match byte-for-byte.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt does not match ENTRY");
}
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt (verified)`);
