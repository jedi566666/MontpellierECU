with open("chart.js", "r", encoding="utf-8") as f:
    content = f.read()

# Add imports
if "import { STATE }" not in content:
    content = 'import { STATE } from "./state-utils.js";\nimport { updatePriceDisplay } from "./ui-state.js";\n\n' + content

# Replace chart-price display
content = content.replace(
    "el('chart-price').textContent=current?.price!=null?money(current.price):'—';",
    """el('chart-price').textContent = '';
  if (!current) {
    updatePriceDisplay(el('chart-price'), 'UNAVAILABLE', 'Aucune pool sélectionnée');
  } else {
    updatePriceDisplay(el('chart-price'), current.price > 0 ? 'AVAILABLE' : 'LOW_QUALITY');
  }"""
)

# Modify catch block
content = content.replace(
    "el('chart-status').textContent='Historique temporairement indisponible. Nouvelle tentative à la prochaine actualisation.'",
    "el('chart-status').textContent='Historique temporairement indisponible. Nouvelle tentative à la prochaine actualisation.';\n    updatePriceDisplay(el('chart-price'), 'DATA_ERROR', 'Échec de relevé')"
)

with open("chart.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated chart.js")
