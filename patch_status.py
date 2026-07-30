#!/usr/bin/env python3
"""patch_status.py — surgical edits to MANUSCRIPT-STATUS.md"""

import sys, argparse, shutil
from pathlib import Path

DOC = Path("MANUSCRIPT-STATUS.md")
EDITS = []

EDITS.append((
"""A transparent protective sheet lies over one page of each spread. The clear
side alternates LEFT/RIGHT with each file — unbroken across 76 consecutive
files. An adjacent duplicate necessarily breaks that alternation, so all
adjacent duplicates are findable.

### Alternation breaks — ALL FOUR CHECKED BY EYE
| Files | Result |
|---|---|
| 079 / 080 | different pages |
| 119 / 120 | **DUPLICATE** |
| 127 / 128 | **DUPLICATE** |
| 142 / 143 | different pages |

144 files - 2 duplicates = **142 unique captures** (manuscript ~141 pages).""",

"""A transparent protective sheet lies over one page of each spread. The clear
side alternates LEFT/RIGHT with each file. The alternation is real, but it
does NOT run unbroken: it desynchronizes at every break and never resyncs.
Parity alone therefore cannot predict the clear side past the first break.

### Side-sequence breaks — 2026-07-29 re-export
Derived by picking the unveiled half of each original by sharpness
(Laplacian variance inside the page trim), then reading the L/R sequence.
Nine same-side adjacencies:

| Files | Source | Status |
|---|---|---|
| 001 / 002 | 1516 -> 1517 | unexplained; front matter |
| 003 / 004 | 1518 -> 1519 | likely detector artifact (gap 4.8%) |
| 033 / 034 | 1548 -> **1550** | IMG_1549 absent at capture |
| 039 / 040 | 1555 -> **1557** | IMG_1556 absent at capture |
| 047 / 048 | 1564 -> 1565 | likely detector artifact (gap 3.2%) |
| 092 / 093 | `1609 copy` -> `1609` | literal file copy; filename proves it |
| 119 / 120 | 1635 -> 1636 | **DUPLICATE** — confirmed by eye |
| 127 / 128 | 1643 -> 1644 | **DUPLICATE** — confirmed by eye |
| 142 / 143 | 1658 -> 1659 | different pages (eye); likely dropped exposure |

**079 / 080 is NOT a break in this reading** — it alternates cleanly. The
earlier four-row table is superseded by this one.

A break is trustworthy only when corroborated by something independent of
the detector: a missing source number, a filename, or an eye check. Breaks
whose sharpness gap is under ~10% are probably detector artifacts.

Coin-flip files still needing an eye check:
003 (4.8%), 036 (0.9%), 048 (3.2%), 144 (6.1%), 090 (9.1%).

### Count
Source numbering runs IMG_1516–1660 = 145 slots. Absent: 1549, 1556, 1597.
`081-1.heic` occupies the 1597 slot — sorts correctly by timestamp with the
side sequence unbroken, so the re-shoot anomaly is benign.
142 IMG files + `081-1.heic` + the 1609 copy = 144 files.

144 files − 1 file copy − 2 duplicates = **141 unique pages**.

**OPEN — completeness.** IMG_1549 and IMG_1556 were deleted at capture.
Nothing in the surviving files can say whether they were blurry retakes or
unique spreads. If unique, up to two manuscript pages were never archived.
Answerable only against the physical book."""))

EDITS.append((
"""| Split single pages | `Quran photos/ForClaude` | one page per file |""",

"""| Split single pages (OLD) | `Quran photos/ForClaude` | 896x1372 frame, page only ~608x1142 — superseded |
| Re-exported pages | `Quran photos/ForClaude-hires` | tight page crop; short edge median 1141, long edge ~2100 |"""))

EDITS.append((
"""Anomalies to resolve: `081-1.heic` is 2460x1606 while all others are 3024
square — likely a re-shoot. TIFF folder holds 145 files against 144 JPEGs.""",

"""Anomalies: `081-1.heic` is 2460x1606 while all others are 3024 square — a
re-shoot standing in for the absent IMG_1597. RESOLVED: it sorts into
position 080 by timestamp with the side sequence intact. TIFF folder still
holds 145 files against 144 JPEGs — unresolved, low priority."""))

EDITS.append((
"""needs several times that. Lossless TIFFs are the same dimensions as the JPEGs.""",

"""needs several times that. Lossless TIFFs are the same dimensions as the JPEGs.

**This ruling was resolution-dependent and the resolution has changed.**
Those tests ran on spreads giving 27-33px line height. The re-export crops
tight to a single page: 028 went from 594x843 to 1102x1661, line pitch near
~110px at native size. Worth exactly ONE re-test on the hires pages before
the ruling is final. Do not re-test the old spreads; that is settled.

**Upload ceiling.** The Claude project folder resamples every image to
~1.23 MP. The hires pages arrive as 896x1372, line pitch ~69px, not 110px.
Whole-page uploads cannot exceed this. To work at native detail, upload a
CROP of the region of interest (a heading band ~1102x550 = 0.6 MP is under
the cap and arrives untouched)."""))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--doc", default=str(DOC))
    args = ap.parse_args()

    p = Path(args.doc)
    if not p.is_file():
        sys.exit("not found: %s  (run from the repo root)" % p)

    text = original = p.read_text()
    problems = []
    for i, (old, new) in enumerate(EDITS, 1):
        n = text.count(old)
        if n == 1:
            text = text.replace(old, new)
            print("  edit %d: OK" % i)
        elif n == 0:
            problems.append("edit %d: anchor NOT FOUND" % i)
        else:
            problems.append("edit %d: matches %d times, ambiguous" % (i, n))

    if problems:
        print("\n--- refusing to write ---")
        for x in problems:
            print("  " + x)
        sys.exit(1)

    if args.dry_run:
        print("\ndry run - nothing written (%d -> %d chars)"
              % (len(original), len(text)))
        return

    shutil.copy2(p, str(p) + ".bak")
    p.write_text(text)
    print("\nwritten. backup at %s.bak" % p.name)


if __name__ == "__main__":
    main()
