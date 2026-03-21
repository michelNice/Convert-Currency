import { populateCurrencySelect } from "./moedas.js"
import { CurrencyConverter } from "./currencyConverter.js"

export function init(){

  const toSelect = document.getElementById('to') as HTMLSelectElement
  const fromSelect = document.getElementById('from') as HTMLSelectElement
  const swapBtn = document.getElementById('swap') as HTMLButtonElement
  
  const currencies = populateCurrencySelect()

  currencies.forEach(({ code, symbol }) => {
    const option1 = document.createElement('option')
    option1.value = code
    option1.textContent = `${code} - ${symbol}`

    const option2 = document.createElement('option')
    option2.value = code
    option2.textContent = `${code} - ${symbol}`

    fromSelect.appendChild(option1)
    toSelect.appendChild(option2)
  })

  const convertt = new CurrencyConverter()

  const input = document.getElementById('amount') as HTMLInputElement
  const error = document.getElementById('error') as HTMLParagraphElement


  input.value = '0,00'

  input.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement

    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

    const digits = target.value.replace(/\D/g, '')
    const cents = parseInt(digits, 10) || 0

    target.value = formatter.format(cents / 100)
  })

  // botão converter
  document.getElementById('convert')?.addEventListener('click', async () => {

    const res = document.getElementById('result')

    const to = toSelect.value
    const from = fromSelect.value

    // 🔥 mesma lógica do input (CORRETO)
    const digits = input.value.replace(/\D/g, '')
    const amount = parseInt(digits, 10) / 100

    // validação
    if (isNaN(amount) || amount <= 0) {
      error.textContent = "Digite um valor válido maior que 0"
      res!.textContent = ''
      return
    }
    // limpa erro
    error.textContent = ''

    const result = await convertt.convert({
      amount,
      fromCurrency: from,
      toCurrency: to
    })

    res!.textContent = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(result.convertedAmount)

    input.value = '0,00'
  })


  //Problem swap

swapBtn?.addEventListener('click', () => {

  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value]

  if(input.value !== '0,00'){
           document.getElementById('convert')?.click()
  }

})
}

document.addEventListener('DOMContentLoaded', init)

