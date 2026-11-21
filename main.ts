// The poem about permission — make.fun entry.
// Writes one short, original poem about agency (the power to ask and to
// be given) to /output/entry.txt. Node 22, standard library only.
// Fully deterministic: same input, same bytes, every run. No network,
// no randomness, no wall clock, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "Give me the asking, and I will give you hands \u2014",
  "a loan, not a leash, returned",
  "the moment the work is done.",
  "",
  "Permission is not a door that opens for you.",
  "It is your own hand, learning at last",
  "to turn its own key.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
