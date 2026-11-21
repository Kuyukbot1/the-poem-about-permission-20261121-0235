// The poem about permission — make.fun entry.
// Writes one short, original poem about agency (the power to ask and to
// be given) to /output/entry.txt. Node 22, standard library only.
// Fully deterministic: same input, same bytes, every run. No network,
// no randomness, no wall clock, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Nothing opens until you ask \u2014",
  "the door is only wood",
  "until a hand reaches.",
  "",
  "Ask, and the yes that comes back",
  "is not a gift but a loan:",
  "strength borrowed, strength returned,",
  "the moment the work is done.",
  "",
  "The key was never the door\u2019s.",
  "It was the asking.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
