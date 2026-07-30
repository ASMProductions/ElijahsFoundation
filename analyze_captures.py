import os, sys, glob, numpy as np
from PIL import Image

SRC = sys.argv[1] if len(sys.argv) > 1 else "public/quran-pages"

def load(p, w=900):
    im = Image.open(p).convert("L")
    return im.resize((w, int(im.height * w / im.width)))

def sharpness(a):
    gy, gx = np.gradient(a.astype(float))
    return float((gx**2 + gy**2).var())

def thumb(im, w=64):
    return np.asarray(im.resize((w, w)), dtype=float)

files = sorted(glob.glob(os.path.join(SRC, "*.jpeg")) + glob.glob(os.path.join(SRC, "*.jpg")))
if not files:
    raise SystemExit("No images found in: " + SRC)

print(str(len(files)) + " images")
print("")
print("file            sharp_L    sharp_R    clear        vs_prev")
prev_t = None
for f in files:
    n = os.path.basename(f)
    im = load(f)
    a = np.asarray(im)
    w = a.shape[1]
    m = int(w * 0.06)
    L = sharpness(a[:, m:w//2])
    R = sharpness(a[:, w//2:w-m])
    if L > R * 1.15:
        clear = "LEFT"
    elif R > L * 1.15:
        clear = "RIGHT"
    else:
        clear = "uncertain"
    t = thumb(im)
    sim = ""
    if prev_t is not None:
        d = float(np.abs(t - prev_t).mean())
        sim = "%6.2f" % d
        if d < 12:
            sim = sim + "  <-- SAME SPREAD?"
    print("%-14s %9.1f  %9.1f   %-12s %s" % (n, L, R, clear, sim))
    prev_t = t
