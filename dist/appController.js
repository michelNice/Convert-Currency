import { populateCurrencySelect } from "./moedas.js";
import { CurrencyConverter } from "./currencyConverter.js";
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
    const convertt = new CurrencyConverter();
    const input = document.getElementById('amount');
    input.addEventListener('input', (e) => {
        const target = e.target;
        const formatter = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2, maximumFractionDigits: 2 });
        let digits = target.value.replace(/\D/g, '');
        let cents = parseInt(digits, 10) || 0;
        target.value = formatter.format(cents / 100);
    });
    document.getElementById('convert')?.addEventListener('click', async (e) => {
        //const input = document.getElementById('amount') as HTMLInputElement
        const error = document.getElementById('error');
        const to = toSelect.value;
        const from = fromSelect.value;
        const amount = +input.value;
        if (!input.value || isNaN(amount) || amount <= 0) {
            error.textContent = "Digite um valor válido maior que 0";
        }
        input.value = '';
        input.value = '0,00';
        const result = await convertt.convert({
            amount,
            fromCurrency: from,
            toCurrency: to
        });
        console.log(result);
    });
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=appController.js.map