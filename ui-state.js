import { STATE } from "./state-utils.js";

export function updatePriceDisplay(element, stateKey, extraDetails = "") {
  const state = STATE[stateKey];
  if (!element) return;
  element.textContent = state.icon + " " + state.text + (extraDetails ? " — " + extraDetails : "");
  element.className = "price-state " + stateKey.toLowerCase();
  element.style.color = state.color;
  element.setAttribute("aria-label", state.text);
}

export function resetPriceDisplay(element) {
  if (!element) return;
  element.className = "price-state";
  element.style.color = "";
  element.removeAttribute("aria-label");
}
