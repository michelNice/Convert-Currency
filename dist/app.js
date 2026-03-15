import { convertCurrency } from "./currencyService.js";
import { populateCurrencySelect } from "./moedas.js";
populateCurrencySelect();
convertCurrency({
    amount: 100,
    fromCurrency: "USD",
    toCurrency: "BRL"
}).then(result => console.log(result)).catch(error => {
    console.error("Error ", error);
});
//# sourceMappingURL=app.js.map