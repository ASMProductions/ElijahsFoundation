import os, sys, glob, subprocess, difflib, numpy as np
from PIL import Image, ImageOps

SRC, OUT = "public/quran-pages", "ocr"
os.makedirs(OUT, exist_ok=True)

SURAHS = {"يس":"Ya-Sin 36","نوح":"Nuh 71","النبا":"An-Naba 78","الواقعة":"Al-Waqiah 56",
          "الملك":"Al-Mulk 67","الفتح":"Al-Fath 48","الرحمن":"Ar-Rahman 55",
          "المزمل":"Al-Muzzammil 73","الفجر":"Al-Fajr 89","الكافرون":"Al-Kafirun 109",
          "الاخلاص":"Al-Ikhlas 112","الفلق":"Al-Falaq 113","الناس":"An-Nas 114"}

def strip(im, side):
    w, h = im.size
    top, bot = int(h*0.145), int(h*0.235)
    box = (int(w*0.07), top, int(w*0.49), bot) if side=="L" else (int(w*0.51), top, int(w*0.93), bot)
    c = im.crop(box).convert("L")
    c = ImageOps.autocontrast(c, cutoff=3)
    return c.resize((c.width*4, c.height*4), Image.LANCZOS)

def ocr(img, whitelist=None):
    p = os.path.join(OUT, "_h.png"); img.save(p)
    cmd = ["tesseract", p, "-", "-l", "ara", "--psm", "7"]
    if whitelist: cmd += ["-c", "tessedit_char_whitelist=" + whitelist]
    return " ".join(subprocess.run(cmd, capture_output=True, text=True).stdout.split())

def guess(t):
    best, score = None, 0.0
    for k, v in SURAHS.items():
        for tok in t.split():
            s = difflib.SequenceMatcher(None, k, tok).ratio()
            if s > score: best, score = v, s
    return (best, round(score,2)) if score >= 0.45 else (None, round(score,2))

targets = sys.argv[1:] or [os.path.basename(f)[:-5] for f in sorted(glob.glob(SRC+"/*.jpeg"))]
print("file   side  surah_guess           conf  digits   raw")
for n in targets:
    p = os.path.join(SRC, n + ".jpeg")
    if not os.path.exists(p): print(n, "MISSING"); continue
    im = Image.open(p)
    for side in ("R", "L"):
        s = strip(im, side)
        raw = ocr(s)
        num = ocr(s, "٠١٢٣٤٥٦٧٨٩")
        g, c = guess(raw)
        print("%-6s %-4s %-21s %-5s %-8s %s" % (n, side, g or "-", c, num or "-", raw[:60]))
