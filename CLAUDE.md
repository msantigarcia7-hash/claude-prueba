# Preferencias del usuario

- Responder siempre en español.
- Este repositorio se usa sobre todo para material de estudio (por ejemplo, tablas y resúmenes de matemáticas en PDF).

## Formato de tablas, PDFs y material de estudio

Estilo **minimalista pero claro**, como las tablas de ChatGPT:

- Fondo blanco y texto negro. **Sin colores de relleno**: nada de cabeceras oscuras, celdas sombreadas ni filas alternas.
- **Solo líneas horizontales finas** (gris claro) entre filas. Sin bordes verticales ni recuadros.
- Cabecera en **negrita** con una línea algo más gruesa debajo.
- Texto alineado a la izquierda, con espacio vertical generoso entre filas.
- Títulos sencillos (negrita, sin barras de color ni mayúsculas en todo el título).
- **Sin adornos**: ni iconos, ni símbolos de marca (✱, ◆…), ni resaltados de color. Si hace falta avisar de algo, una nota breve al final.
- Fórmulas matemáticas bien tipografiadas (LaTeX/KaTeX) y sin partirse en dos líneas cuando sea posible.
- Priorizar que sea útil para estudiar: contenido correcto, condiciones de validez y ejemplos claros, antes que la decoración.

## Estructura predeterminada de los documentos

Todo temario, resumen o formulario que se pida se genera con esta estructura (tomada del temario de EDO de primer orden), salvo que se indique otra cosa. Plantilla lista para usar: `plantillas/plantilla-temario.html`.

### Esqueleto general

1. **Título**: `Tema N. Título del tema` y, debajo, una línea discreta con `Asignatura · Grado · Universidad`.
2. **Secciones numeradas** (`1.`, `2.`…) con subapartados (`1.1.`, `1.2.`…). Orden habitual:
   1. Conceptos básicos (definiciones, tipos de solución, PVI, teoremas).
   2. Casos o tipos especiales con análisis cualitativo, si los hay.
   3. Métodos de resolución: un subapartado por método.
   4. Cambios de variable / técnicas auxiliares.
   5. Aplicaciones (física, ingeniería) con su fórmula final.
   6. Ejercicios tipo y estrategias: pasos numerados por método.
   7. Formulario completo: todas las fórmulas, agrupadas por apartado.
   8. Resumen de estrategias: lista de comprobación para identificar el tipo y elegir método (incluye imponer CI, intervalo de definición y soluciones singulares).
3. Una frase final breve indicando qué cubre el documento.

### Plantilla de cada subapartado de método

Siempre en este orden:

1. **Forma**: la ecuación tipo, en línea (`Forma: y' + p(x)y = f(x)`).
2. **Cambio / método**: el cambio de variable o los pasos, en prosa breve o lista numerada.
3. **Fórmula clave**: en caja solo si es imprescindible (ver abajo); si no, en bloque centrado.
4. **Nota**: condiciones de validez, casos excluidos, soluciones singulares.
5. **Ejemplos resueltos**: enunciado, pasos intermedios esenciales y resultado final en bloque centrado, sin caja.

### Definiciones y teoremas

- El término definido va en **negrita** la primera vez (`Una **ecuación diferencial** es…`).
- Teoremas y proposiciones con número y nombre en negrita: **Teorema 1.1 (Existencia)**, seguido de hipótesis → conclusión.
- Tras los teoremas, una **Nota** que aclare matices y, si procede, un **contraejemplo** (p. ej. fallo de unicidad).

### Método de cajas y celdas para fórmulas (estilo ChatGPT)

**Regla principal: pocas cajas.** Se usan solo para las fórmulas importantes e imprescindibles; en caso de duda, no se usan. Por defecto, una fórmula va en bloque centrado sin caja.

- **Caja** (solo fórmulas imprescindibles: la solución general de un método, la ecuación o condición que lo define, el resultado central de un teorema): fórmula centrada dentro de una caja con borde fino gris (`1px #bfbfbf`), esquinas ligeramente redondeadas, **fondo blanco**, sin colores, con una etiqueta pequeña en gris arriba a la izquierda ("Solución general", "Condición de exactitud"). Como máximo una por subapartado, y muchos subapartados no la necesitan. Es la única excepción a "sin recuadros", y solo para fórmulas, nunca para texto.
- **Sin caja** (todo lo demás): cambios de variable, pasos intermedios, desarrollos, resultados de los ejemplos y fórmulas secundarias en bloque centrado (`\[ … \]`). Fórmulas cortas dentro del texto: en línea (`\( … \)`).
- **Celdas**: cuando haya varias fórmulas comparables (formulario, factores integrantes, casos), usar tabla con el estilo de arriba, una fórmula por celda, columnas tipo `Tipo | Forma | Método / fórmula clave` o `Caso | Fórmula | Condición`.
- Una caja no debe partirse entre páginas (`break-inside: avoid`) y las fórmulas no deben saltar de línea (`white-space: nowrap`).

### Generación técnica del PDF

- HTML + KaTeX (`\( \)` en línea, `\[ \]` en bloque), impreso en A4 con Chromium (Playwright), partiendo de `plantillas/plantilla-temario.html`.
- Revisar el PDF resultante (captura) antes de entregar: fórmulas renderizadas, sin cortes feos de página, sin desbordes.
- Verificar matemáticamente los ejemplos y fórmulas; si el material de partida tiene erratas, corregirlas y no copiarlas.
