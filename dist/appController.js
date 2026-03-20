/*import { populateCurrencySelect } from "./moedas.js"
import { CurrencyConverter } from "./currencyConverter.js"
export function init(){

  const toSelect = document.getElementById('to') as HTMLSelectElement
  const fromSelect = document.getElementById('from') as HTMLSelectElement
  
  const currencies = populateCurrencySelect()

  currencies.forEach(({ code, symbol }) => {
      const options1 = document.createElement('option')

        options1.value = code

        options1.textContent = `${code} - ${symbol}`

        const options2 = document.createElement('option')

        options2.value = code
    
        options2.textContent = `${code} - ${symbol}`

     fromSelect.appendChild(options1)
     toSelect.appendChild(options2)
  })

  const convertt = new CurrencyConverter()

   const input = document.getElementById('amount') as HTMLInputElement

    input.value = '0,00'

 input.addEventListener('input', (e)=> {
  const target = e.target as HTMLInputElement;

  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

 
  const digits = target.value.replace(/\D/g, '');

  const cents = Number(digits) || 0;

  target.value = formatter.format(cents / 100);
});


   document.getElementById('convert')?.addEventListener('click',async(e)=> {
 
    const error = document.getElementById('error') as HTMLParagraphElement

    const to = toSelect.value

    const from = fromSelect.value

    const digits = input.value.replace(/\D/g, '');
     const amount = Number(digits) / 100;


if (isNaN(amount) || amount <= 0) {
  error.textContent = "Digite um valor válido maior que 0";
  return;
}

    error.textContent = '';

    input.value = '0,00'

   const result = await convertt.convert({
      amount,
      fromCurrency:from,
      toCurrency:to
   });

 })

}

document.addEventListener('DOMContentLoaded',init)
*/
import { populateCurrencySelect } from "./moedas.js";
import { CurrencyConverter } from "./currencyConverter.js";
export function init() {
    const toSelect = document.getElementById('to');
    const fromSelect = document.getElementById('from');
    const currencies = populateCurrencySelect();
    currencies.forEach(({ code, symbol }) => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = `${code} - ${symbol}`;
        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = `${code} - ${symbol}`;
        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    });
    const convertt = new CurrencyConverter();
    const input = document.getElementById('amount');
    const error = document.getElementById('error');
    input.value = '0,00';
    input.addEventListener('input', (e) => {
        const target = e.target;
        const formatter = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        const digits = target.value.replace(/\D/g, '');
        const cents = parseInt(digits, 10) || 0;
        target.value = formatter.format(cents / 100);
    });
    // botão converter
    document.getElementById('convert')?.addEventListener('click', async () => {
        const res = document.getElementById('result');
        const to = toSelect.value;
        const from = fromSelect.value;
        // 🔥 mesma lógica do input (CORRETO)
        const digits = input.value.replace(/\D/g, '');
        const amount = parseInt(digits, 10) / 100;
        // validação
        if (isNaN(amount) || amount <= 0) {
            error.textContent = "Digite um valor válido maior que 0";
            res.textContent = '';
            return;
        }
        // limpa erro
        error.textContent = '';
        const result = await convertt.convert({
            amount,
            fromCurrency: from,
            toCurrency: to
        });
        res.textContent = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(result.convertedAmount);
        input.value = '0,00';
    });
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=appController.js.map