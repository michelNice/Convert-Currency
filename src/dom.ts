import { populateCurrencySelect } from "./moedas.js"

export const amount = document.getElementById('amount') as HTMLInputElement

export const convert = document.getElementById('convert') as HTMLButtonElement

export function init(){
   console.log("DOM carregou")

  const toSelect = document.getElementById('to') as HTMLSelectElement
  const fromSelect = document.getElementById('from') as HTMLSelectElement


  populateCurrencySelect(fromSelect, toSelect)

}

document.addEventListener('DOMContentLoaded',init)