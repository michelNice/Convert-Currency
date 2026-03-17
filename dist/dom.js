import { populateCurrencySelect } from "./moedas.js";
document.getElementById('convert')?.addEventListener('click', async () => {
    const input = document.getElementById('amount');
    const amount = +input.value;
    input.value = '';
    const to = document.getElementById('from').value;
    const from = document.getElementById('to').value;
});
export function init() {
    const toSelect = document.getElementById('to');
    const fromSelect = document.getElementById('from');
    const currencies = populateCurrencySelect();
    currencies.forEach(({ code, symbol }) => {
        const options1 = document.createElement('option');
        options1.value = code;
        options1.textContent = `${code} - ${symbol}`;
        const options2 = document.createElement('option');
        options2.value = code;
        options2.textContent = `${code} - ${symbol}`;
        fromSelect.appendChild(options1);
        toSelect.appendChild(options2);
    });
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=dom.js.map