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

144 files - 2 duplicates = **142 unique captures** (manuscript ~141 pages).

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

**Thumbnail correlation does not detect duplicates.** Every page shares the
same gold floral border, which swamps the signal. A confirmed duplicate
scored 0.55. Use the alternation test instead.

## Source files
| What | Where | Size |
|---|---|---|
| Originals (HEIC) | `Quran photos/Originals` | 3024x3024 square |
| TIFFs | `Quran photos/Cropped/Tiffs` | 2505x1652 — **145 files** |
| Web JPEGs (spreads) | `public/quran-pages` | ~2500x1650, 144 files |
| Split single pages | `Quran photos/ForClaude` | one page per file |

Anomalies to resolve: `081-1.heic` is 2460x1606 while all others are 3024
square — likely a re-shoot. TIFF folder holds 145 files against 144 JPEGs.

## Data state
- Pages 5–117: cleared of false Juz 1 labels — commit `373e488`
- Pages 118–144: **VERIFY** whether Al-Baqarah labels were cleared. Confirmed
  content there is Al-Muzzammil into Al-Fajr, not Al-Baqarah.

## Next
Find the **eleven surah boundaries** — not verse-by-verse transcription.
Binary search each boundary (4–5 views), ~50 images total, across 2–3
sessions. Commit findings to `lib/quran-data.json` at the end of each session.

The earlier session's boundary table is an **unverified hypothesis**. Its
ranges contradict its own anchors in places. Do not treat it as established.

Verse-level attribution belongs in the planned Scholar Commentary feature —
contributed by people who read Urdu and Persian from the manuscript itself.
The site can truthfully say "Sūrat al-Muzzammil, manuscript page ۱۱۸" now.
