import { populateCurrencySelect } from "./moedas.js";
export const amount = document.getElementById('amount');
export const convert = document.getElementById('convert');
export function init() {
    console.log("DOM carregou");
    const toSelect = document.getElementById('to');
    const fromSelect = document.getElementById('from');
    populateCurrencySelect(fromSelect, toSelect);
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=dom.js.map