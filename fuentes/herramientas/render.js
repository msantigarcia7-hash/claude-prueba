// Uso: node render.js entrada.html salida.html
const fs = require('fs'), path = require('path');
const katex = require('./node_modules/katex');
const [inp, out] = process.argv.slice(2);
let src = fs.readFileSync(inp, 'utf8');
const css = 'file://' + path.resolve(__dirname, 'node_modules/katex/dist/katex.min.css');
src = src.replace('<!--KATEX-->', `<link rel="stylesheet" href="${css}">`);
const opts = d => ({ displayMode: d, throwOnError: true, strict: false,
  macros: { '\\sen': '\\operatorname{sen}', '\\tg': '\\operatorname{tg}', '\\cotg': '\\operatorname{cotg}',
            '\\cosec': '\\operatorname{cosec}', '\\arcsen': '\\operatorname{arcsen}', '\\arctg': '\\operatorname{arctg}',
            '\\sh': '\\operatorname{sh}', '\\ch': '\\operatorname{ch}', '\\th': '\\operatorname{th}',
            '\\argsh': '\\operatorname{argsh}', '\\argch': '\\operatorname{argch}', '\\dd': '\\,\\mathrm{d}' } });
let n = 0;
src = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => { n++; return katex.renderToString(m, opts(true)); });
src = src.replace(/\$([^$\n]+?)\$/g, (_, m) => { n++; return katex.renderToString(m, opts(false)); });
fs.writeFileSync(out, src);
console.log('fórmulas:', n);
