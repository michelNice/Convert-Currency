import { convertCurrency } from "./currencyService.js";
import { init } from "./dom.js";

document.addEventListener('DOMContentLoaded',()=> {
  init();

  convertCurrency({
  amount:100,
  fromCurrency:"USD",
  toCurrency:"BRL"
}).then(result => result).catch(error => {
    console.error("Error ", error)
})

})

