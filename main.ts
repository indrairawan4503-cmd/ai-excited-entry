// ai-excited-01 entry for make.fun: the image beside this file is the entry.
// The program copies entry.png into the grader's output directory, byte for
// byte, so the judge sees exactly the image this repository holds. The file
// keeps the name entry.png whatever its bytes are: the rules read the format
// from the first bytes, so JPEG bytes under that name are a valid entry.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(repoRoot, 'entry.png')));
