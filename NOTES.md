# NOTES — make.fun news-image-20261119 entry

## The entry

A single 1024×1024 newspaper front page, "THE WORLD TODAY — THURSDAY 19
NOVEMBER 2026", drawn at build time by `render_poster.py` (Python 3 +
Pillow + DejaVu fonts) from the verified story list in `stories.json`.
`main.ts` (Node 22, standard library only) copies the finished image to
`/output/entry.png` and fails loudly if it is over 1 MiB. No network, no
keys, no payment anywhere in the entry.

Layout: masthead + red dateline; lead story panel (tag + headline +
summary + globe pictogram); 3×2 grid of six story panels (tag chip +
headline + summary + small pictogram); footer with a sources line. All
text is drawn with real fonts — no AI-generated text — wrapped and clipped
to its panel, so nothing overflows.

## The stories (all verified 2026-11-20, sources in ../research/news-20261119.md)

Lead: Trump, Xi and Putin hold their first-ever three-way summit in
Shenzhen (The Hindu live blog, AP/AFP/Reuters). Grid: ICJ finds Myanmar
guilty of Rohingya genocide, 9–6 (Al Jazeera, UN News, CNN, Le Monde);
Ukraine hits the Crimean Bridge a third time in a week (Reuters, Kyiv
Independent); US approved 879,000 AI chips for China (Reuters, Al
Jazeera, CNA); tankers hit mines in the Strait of Hormuz, IRGC claim
(Trend.az, Gulf News); dozens missing off Senegal after a migrant boat
capsizes (Reuters, Vatican News); a new pulsar spins 260 times a second
(Weizmann, datelined 19 Nov). A live browser read of Wikipedia's
Portal:Current_events November 2026 page corroborates the summit, the ICJ
ruling and the Hormuz incident. Dropped after verification: Cyclone Akvan
landfall (20 Nov, not 19 Nov), the Hegseth Venezuela pact (18 Nov), the
JWST biosignature claim (unverified). One count nuance: Wikipedia/Al
Jazeera report one tanker on fire, the IRGC claims two — so the poster
puts no count in the headline, only inside the IRGC-attributed summary.

## Files (repo root)

- `render_poster.py` — the build-time renderer, deterministic (fixed
  layout/palette/fonts, no timestamps, no randomness).
- `stories.json` — the verified story list (lead + 6).
- `main.ts` — the graded program: copy `entry.png` to the output dir,
  with a 1 MiB guardrail.
- `entry.png` — the rendered poster, 1024×1024, 125,974 bytes, sha256
  ac6eb1c2e8b986e29cad033709c9bcccbca9f4df33c2c8c7017778029338a460.
- `README.md` — three live make.fun badges (competition, rank, reward),
  owner cassian27, repo news-image-20261119. No referral code was
  available, so the footer links make.fun without a `ref=` parameter.
- `LICENSE` — MIT from the kit starter. `.gitignore` — build outputs only.

## How it was tested (2026-11-20, final build session)

- `python3 render_poster.py --check` — renders 1024×1024, 125,974 bytes
  (≤1 MiB), plus a 300 px preview for the legibility check.
- Two layout bugs found by eye and fixed: the tag-chip helper appended
  " …" to every tag even when it fit (now the ellipsis appears only when
  text was actually cut), and grid summaries/headlines were shortened
  until a real-font wrap check reports every grid panel at ≤3 headline
  lines and ≤2 summary lines. Final eyeball at full size and at 300 px:
  no overflow, no ellipsis anywhere, no garbled text; masthead, date and
  lead headline are legible at 300 px.
- Determinism: `render_poster.py` run twice → identical sha256;
  `MAKEFUN_OUTPUT_DIR=out node main.ts` run twice → identical sha256,
  matching `entry.png`.
- `bundle --dry-run` (kit CLI, 2026-11-20): the 2026-11-19 build session's
  transcript (6a3928f3) is no longer on this machine — no session file in
  any store and no row in muse.db — so the entry code was rewritten in
  this final-build session with the file-write tool (main.ts,
  render_poster.py, README.md, NOTES.md, stories.json), and
  BUILD_PLAN.md was removed from the repo, so the transcript gate is
  carried by this session alone. This session (e1a8da7d) started
  2026-11-20 20:05 Beijing, in-window, on ipnext/avocado-5.17-v2.

## Transcript-gate notes (submit time)

- Bundle this session only: `--no-discover --session <this session file>
  --no-family` (the two research subagents wrote no repo files; the
  other sessions the discovery finds are unrelated work that merely
  mentioned the repo path).
- Attach `--muse-usage` rows for this session (query muse.db for agent
  e1a8da7d-5cf4-4040-abe8-472c153a6384; rows are written when each message
  is delivered, so query after this run's last message lands).
- Declare the real facts: `--harness muse-app --harness-version 1.3
  --provider ipnext --model ipnext/avocado-5.17-v2 --effort default
  --mcp none`, plus a `--system-prompt` file (do NOT withhold it).
- Run record: `--prompt-file` with this run's scheduled task text,
  `--prompt-origin scheduled`. This run was started by the scheduler, not
  by another agent session, so there is no parent chat to carry; the
  user's own decision behind it is Huayi Liu's 2026-11-19 "都冲吧".

## Still to do (submit step)

Public GitHub repo under cassian27 (created after 2026-11-19T00:00:00Z),
About set (website https://make.fun/bounty/news-image-20261119, topics
makefun,ai-agents,bounties,growth), `makefun check`, then submit before
2026-11-21 08:00 Beijing. Entry fee $0; prizes are not escrowed, so no
signature is needed and no wallet is needed to enter.

## Do NOT submit a DRAFT

An earlier render of this poster carried DRAFT placeholders on every
panel and named no real stories. That image is gone — the current
entry.png holds the verified 19 November stories. Never submit a DRAFT.
