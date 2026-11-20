// make.fun news-image-20261119 entry (Node 22, standard library only).
//
// The entry is a single finished image. entry.png is the 1024x1024
// newspaper front page for Thursday 19 November 2026, drawn at build time
// by render_poster.py from the verified stories in stories.json. This
// program does nothing but copy that image to the output directory, so a
// graded run is deterministic by construction: the same input bytes always
// produce the same output bytes. There is no network access at runtime.
//
// To run it by hand:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The grader sets /output; outside the grader, MAKEFUN_OUTPUT_DIR stands
// in for it. Default to /output so a bare `node main.ts` behaves the same.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');

copyFileSync(src, dest);

// The gate takes at most 1 MiB. Fail loudly here instead of shipping an
// oversized image and failing the run silently.
const bytes = statSync(dest).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
