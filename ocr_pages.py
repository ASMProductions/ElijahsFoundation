import os, sys, glob, subprocess, numpy as np
from PIL import Image, ImageOps

SRC = "public/quran-pages"
OUT = "ocr"
os.makedirs(OUT, exist_ok=True)

def sharpness(a):
    gy, gx = np.gradient(a.astype(float))
    return float((gx**2 + gy**2).var())

def clear_side(im):
    g = np.asarray(im.convert("L").resize((900, int(im.height*900/im.width))), dtype=float)
    w = g.shape[1]; m = int(w*0.06)
    L = sharpness(g[:, m:w//2]); R = sharpness(g[:, w//2:w-m])
    return "L" if L > R else "R"

def textblock(im, side):
    w, h = im.size
    top, bot = int(h*0.17), int(h*0.86)
    box = (int(w*0.07), top, int(w*0.47), bot) if side == "L" else (int(w*0.53), top, int(w*0.93), bot)
    c = im.crop(box).convert("L")
    c = ImageOps.autocontrast(c, cutoff=2)
    return c.resize((c.width*2, c.height*2), Image.LANCZOS)

files = sorted(glob.glob(os.path.join(SRC, "*.jpeg")))
targets = sys.argv[1:] if len(sys.argv) > 1 else [os.path.basename(f)[:-5] for f in files]

for n in targets:
    p = os.path.join(SRC, n + ".jpeg")
    if not os.path.exists(p):
        print("===== " + n + " MISSING ====="); continue
    im = Image.open(p)
    side = clear_side(im)
    c = textblock(im, side)
    tmp = os.path.join(OUT, "_tmp.png")
    c.save(tmp)
    r = subprocess.run(["tesseract", tmp, "-", "-l", "ara", "--psm", "6"],
                       capture_output=True, text=True)
    txt = " ".join(r.stdout.split())
    print("===== " + n + "  clear=" + side + " =====")
    print(txt if txt else "(no text extracted)")
    print("")
