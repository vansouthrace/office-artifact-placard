// Office Artifacts: The One-Line Placard Contest — a make.fun program/v1 entry.
// It writes one line to /output/entry.txt: a museum placard for an ordinary office
// object, written as if the object were an ancient artifact — catalogue date,
// material, imagined history, donor. Node 22, standard library only. Outside
// the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const placard =
  'Microwave, c. 2004. Enamelled steel. Ritual vessel for reheating offerings; its bell marked the end of the working day. Donated by Accounts.';

// The gate allows 1 to 180 characters: refuse to hand in a line that is too long
// rather than let an invalid entry through.
if ([...placard].length > 180) {
  throw new Error(`placard is ${[...placard].length} characters, over the 180 limit`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), placard + '\n', 'utf8');
