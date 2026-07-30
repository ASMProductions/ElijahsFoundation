# Manuscript Archival Status
Last updated: 2026-07-28

## What this manuscript is
A devotional compilation titled **Surah Yāzdah** ("Eleven Surahs") — Urdu
interlinear translation with khawas (virtues) notes. Imprint: Din Muhammadi
Electric Press / Kutub Khana Din Muhammadi, Nabi Road, Lahore.

**It is NOT Juz 1.** Al-Fatihah and Al-Baqarah do not appear in it.
Any label naming those surahs is false and must be removed on sight.

Front matter (file numbers):
- 001 — inside cover, dedication: Mustopa Milham, Cincinnati -> Elijah
  Mohammed, 6116 S. Michigan Ave, Chicago
- 002 — illuminated title page
- 003–004 — khawas index, then first text page

## Capture model — ESTABLISHED
Photographed on one iPhone session, 28 June 2025, 22:15–~22:50 UTC.
144 exposures, 7–20 seconds apart, EXIF timestamps intact and sequential.
Sort originals by creation date; position N = file N. Filenames
(IMG_15xx.heic) carry no page meaning.

A transparent protective sheet lies over one page of each spread. The clear
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
Answerable only against the physical book.

## File numbers != manuscript page numbers
The book's own Urdu cartouche numerals run behind the file numbers:
- file 120 -> manuscript pages ۱۱۸ / ۱۱۹
- file 130 -> manuscript pages ۱۲۶ / ۱۲۷

Ten file-steps spanning eight manuscript pages, with both duplicates inside
that span — the counts corroborate each other.

## Content confirmed by direct reading
Surah-level only. **Verse numbers from these readings are NOT reliable.**
- file 118 — Ar-Rahman (55) ends; Al-Muzzammil heading begins beneath it
- file 120 — Al-Muzzammil (73) opening
- file 130 — Al-Muzzammil ends; Al-Fajr (89) begins

Known error: file 130's verse range was read as 89:1–3, but an OCR fragment
recovered 89:12–13 from the same page. Surah right, verses wrong. Treat all
verse-level claims from image reading as unverified.

## Ruled out — do not retry
**Arabic OCR does not work on this manuscript.** Tested tesseract `ara`
across psm 6/7/11/13, on full spreads, cropped text blocks, and isolated
cartouche strips; against JPEG, TIFF, and HEIC originals. Output is noise.
Cause is resolution, not format: eight lines of diacriticized calligraphic
naskh photographed across a full spread gives ~27–33px line height. Tesseract
needs several times that. Lossless TIFFs are the same dimensions as the JPEGs.

**This ruling was resolution-dependent and the resolution has changed.**
Those tests ran on spreads giving 27-33px line height. The re-export crops
tight to a single page: 028 went from 594x843 to 1102x1661, line pitch near
~110px at native size. Worth exactly ONE re-test on the hires pages before
the ruling is final. Do not re-test the old spreads; that is settled.

**Upload ceiling.** The Claude project folder resamples every image to
~1.23 MP. The hires pages arrive as 896x1372, line pitch ~69px, not 110px.
Whole-page uploads cannot exceed this. To work at native detail, upload a
CROP of the region of interest (a heading band ~1102x550 = 0.6 MP is under
the cap and arrives untouched).

**Thumbnail correlation does not detect duplicates.** Every page shares the
same gold floral border, which swamps the signal. A confirmed duplicate
scored 0.55. Use the alternation test instead.

## Source files
| What | Where | Size |
|---|---|---|
| Originals (HEIC) | `Quran photos/Originals` | 3024x3024 square |
| TIFFs | `Quran photos/Cropped/Tiffs` | 2505x1652 — **145 files** |
| Web JPEGs (spreads) | `public/quran-pages` | ~2500x1650, 144 files |
| Split single pages (OLD) | `Quran photos/ForClaude` | 896x1372 frame, page only ~608x1142 — superseded |
| Re-exported pages | `Quran photos/ForClaude-hires` | tight page crop; short edge median 1141, long edge ~2100 |

Anomalies: `081-1.heic` is 2460x1606 while all others are 3024 square — a
re-shoot standing in for the absent IMG_1597. RESOLVED: it sorts into
position 080 by timestamp with the side sequence intact. TIFF folder still
holds 145 files against 144 JPEGs — unresolved, low priority.

## Data state
- Pages 5–117: cleared of false Juz 1 labels — commit `373e488`
- Pages 118–144: cleared of false Al-Baqarah labels. Arabic and
  transliteration fields preserved. Confirmed content is Al-Muzzammil
  into Al-Fajr.

## Next
Find the **eleven surah boundaries** — not verse-by-verse transcription.
Binary search each boundary (4–5 views), ~50 images total, across 2–3
sessions. Commit findings to `lib/quran-data.json` at the end of each session.

The earlier session's boundary table is an **unverified hypothesis**. Its
ranges contradict its own anchors in places. Do not treat it as established.

Verse-level attribution belongs in the planned Scholar Commentary feature —
contributed by people who read Urdu and Persian from the manuscript itself.
The site can truthfully say "Sūrat al-Muzzammil, manuscript page ۱۱۸" now.

## Local snapshots
Pre-change backups of touched files live in `.snapshots/<timestamp>-<label>/`
(gitignored, local only). Each folder has a RESTORE.md and the git commit it
was taken from. Not in the repo — check the local Mac working tree.

## Local snapshots
Pre-change backups of touched files live in `.snapshots/<timestamp>-<label>/`
(gitignored, local only). Each folder has a RESTORE.md and the git commit it
was taken from. Not in the repo — check the local Mac working tree.
