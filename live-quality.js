import { updatePriceDisplay } from "./ui-state.js";

export function initLiveQuality() {
  const el = document.getElementById("live-quality");
  if (!el) return null;
  
  document.addEventListener("mtp:pools", e => {
    const pools = e.detail;
    if (!pools.length) {
      updatePriceDisplay(el, "UNAVAILABLE", "Aucune pool détectée");
      return;
    }
    
    const liquidities = pools.map(p => p.liquidity);
    const hasNull = liquidities.some(x => x == null);
    const total = pools.reduce((s, p) => s + (p.liquidity || 0), 0);
    
    if (hasNull) {
      updatePriceDisplay(el, "LOW_QUALITY", "Réserves incomplètes");
    } else if (total < 100) {
      updatePriceDisplay(el, "LOW_QUALITY", "Réserves très faibles: $" + total.toLocaleString());
    } else {
      updatePriceDisplay(el, "AVAILABLE", pools.length + " pools actives · $" + total.toLocaleString() + " total");
    }
  });
}
