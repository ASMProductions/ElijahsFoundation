import numpy as np
from PIL import Image

def inner(n):
    im = Image.open("public/quran-pages/%s.jpeg" % n).convert("L")
    im = im.resize((500, int(im.height*500/im.width)))
    a = np.asarray(im, dtype=float)
    h, w = a.shape
    return a[int(h*0.15):int(h*0.85), int(w*0.12):int(w*0.88)]

def corr(x, y):
    x = x - x.mean(); y = y - y.mean()
    d = np.sqrt((x*x).sum()*(y*y).sum())
    return float((x*y).sum()/d) if d else 0.0

for a, b in [("079","080"), ("119","120"), ("127","128"), ("142","143")]:
    A, B = inner(a), inner(b)
    h = min(A.shape[0], B.shape[0]); w = min(A.shape[1], B.shape[1])
    c = corr(A[:h,:w], B[:h,:w])
    print("%s vs %s   corr=%.4f   %s" % (a, b, c, "DUPLICATE" if c > 0.97 else "different pages"))
