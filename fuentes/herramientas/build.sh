#!/bin/bash
# Requiere: cd fuentes/herramientas && npm install (instala KaTeX). Para el tema 6: cat fuentes/tema6/0*.html > /tmp/tema6.html
# Uso: build.sh fuente.html salida.pdf
set -e
D=$(cd "$(dirname "$0")" && pwd)
node "$D/render.js" "$1" "$D/tmp_render.html"
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$2" "file://$D/tmp_render.html" 2>/dev/null
python3 -c "import pypdf,sys;print('páginas:',len(pypdf.PdfReader(sys.argv[1]).pages))" "$2"
