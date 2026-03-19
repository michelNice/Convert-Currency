import { convertCurrency } from "./currencyService.js";
export class CurrencyConverter {
    constructor() {
        this.history = [];
        const data = localStorage.getItem("history");
        this.history = data ? JSON.parse(data) : [];
    }
    async convert(request) {
        const result = await convertCurrency(request);
        this.history.push(result);
        this.saveHistory();
        console.log(result);
        return result;
    }
    saveHistory() {
        localStorage.setItem("history", JSON.stringify(this.history));
    }
    getHistory() {
        return this.history;
    }
}
//# sourceMappingURL=currencyConverter.js.map