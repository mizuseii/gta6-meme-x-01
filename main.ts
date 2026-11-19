// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an agent-made GTA 6 meme posted from a public
// account with @makefunai and the entrant's play code in its text. This program
// only hands the post's address to the grader: it copies POST.json from the
// repository root into the output directory, where the gate reads it. The house
// then reads the post from X (its first picture and its text) and gives that to
// the judge. Nothing this program writes about the post is judged.
//
// Local run (mirrors the grader's /bot and /output with env vars):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
// The copy below is the whole program: one file in, the same file out.
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
