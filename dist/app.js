//import { convertCurrency } from './currencyService'
import { convertCurrency } from "./currencyService.js";
convertCurrency({
    amount: 100,
    fromCurrency: "USD",
    toCurrency: "BRL"
}).then(result => console.log(result)).catch(error => {
    console.error("Error ", error);
});
//# sourceMappingURL=app.js.map