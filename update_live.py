with open("live-tools.js", "r", encoding="utf-8") as f:
    content = f.read()

# Add imports
if "import { STATE }" not in content:
    content = 'import { STATE } from "./state-utils.js";\nimport { updatePriceDisplay } from "./ui-state.js";\n\n' + content

# Replace the line
old_line = "document.getElementById('live-quality').textContent=!current.length?w[7]:values.some(x=>x==null)?w[2]:values.reduce((a,b)=>a+b,0)<100?w[1]:w[3];"
new_lines = """const el = document.getElementById('live-quality');
    if (!current.length) {
      updatePriceDisplay(el, 'UNAVAILABLE', 'Aucune pool détectée');
    } else {
      const hasNull = values.some(x => x == null);
      const total = values.reduce((a, b) => a + b, 0);
      if (hasNull) {
        updatePriceDisplay(el, 'LOW_QUALITY', 'Réserves incomplètes');
      } else if (total < 100) {
        updatePriceDisplay(el, 'LOW_QUALITY', 'Réserves très faibles: $' + total.toLocaleString());
      } else {
        updatePriceDisplay(el, 'AVAILABLE', current.length + ' pools actives · $' + total.toLocaleString() + ' total');
      }
    }"""

content = content.replace(old_line, new_lines)

with open("live-tools.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated live-tools.js")
