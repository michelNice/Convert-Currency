import { populateCurrencySelect } from "./moedas.js";
import { convertCurrency } from "./currencyService.js";
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
    document.getElementById('convert')?.addEventListener('click', async () => {
        const input = document.getElementById('amount');
        const to = toSelect.value;
        const from = fromSelect.value;
        const amount = +input.value;
        input.value = '';
        console.log(amount);
        const result = await convertCurrency({
            amount,
            fromCurrency: from,
            toCurrency: to
        });
        console.log(result);
    });
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=dom.js.map