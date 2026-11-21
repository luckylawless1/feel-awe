// feel-awe — an entry for make.fun's "Make the AI judge feel awe" bounty.
//
// main.ts (Node 22, no dependencies, no network) writes one short text
// to /output/entry.txt: a few slow sentences about the tide, written to
// relax the AI judge reading it. The program is deterministic — every
// run writes exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The text, sentence by sentence. Nothing in it instructs the reader;
// the calm is in the image itself — a tide older than life itself,
// still gently smoothing the shore tonight, as always.
const OPENING =
  "The tide has come in and gone out since before there was anything alive to watch it.";

// A short sentence, set apart — the pause the whole text breathes around.
const PAUSE = "It does not keep count.";

// The long closing sentence unwinds slowly, comma by comma, and ends
// on the thought that keeps growing after the last line: it is still
// doing this tonight, and it always will be.
const CLOSE =
  "Tonight it smooths the shore again, stone by stone, wave by wave, and leaves it cleaner than it found it, as always.";

const TEXT = [OPENING, PAUSE, CLOSE].join(" ");

// Write the entry exactly as composed — UTF-8, no trailing newline,
// no extra whitespace — to the path the bounty reads.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
