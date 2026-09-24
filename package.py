from pathlib import Path
import zipfile, hashlib, json, re
root=Path(__file__).resolve().parent
site=root/'site'
out=root/'livraison'
out.mkdir(exist_ok=True)
def archive(name,entries):
    dest=out/name
    with zipfile.ZipFile(dest,'w',zipfile.ZIP_DEFLATED) as z:
        for filename,data in entries: z.writestr(filename,data)
    return {'fichier':name,'octets':dest.stat().st_size,'sha256':hashlib.sha256(dest.read_bytes()).hexdigest()}
hashes=[]
hashes.append(archive('MTP-SITE-COMPLET-Cloudflare.zip',[(p.relative_to(site).as_posix(),p.read_bytes()) for p in site.rglob('*') if p.is_file()]))
for name,route in [('MTP-LIVE-AUTONOME.zip','live'),('MTP-WALLET-AUTONOME.zip','wallet')]:
    html=(site/route/'index.html').read_text(encoding='utf-8')
    html=re.sub(r'href="(/(?!assets/|style.css)[^"]*)"',r'href="https://mtptoken.pages.dev\1"',html)
    entries=[('index.html',html.encode()),('app.js',(site/'app.js').read_bytes()),('style.css',(site/'style.css').read_bytes()),('_headers',(site/'_headers').read_bytes())]
    entries.append(('premium.css',(site/'premium.css').read_bytes()))
    entries += [(p.relative_to(site).as_posix(),p.read_bytes()) for p in (site/'assets').glob('*') if p.is_file()]
    hashes.append(archive(name,entries))
sources=[]
for p in root.rglob('*'):
    if p.is_file() and not any(part in ('node_modules','livraison','verification','.wrangler') for part in p.relative_to(root).parts):
        sources.append((p.relative_to(root).as_posix(),p.read_bytes()))
hashes.append(archive('MTP-SOURCES.zip',sources))
(out/'SHA256.json').write_text(json.dumps(hashes,indent=2),encoding='utf-8')
print(json.dumps(hashes,indent=2))
