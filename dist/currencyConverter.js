import { convertCurrency } from "./currencyService";
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
        return result;
    }
    saveHistory() {
        localStorage.setItem("history", JSON.stringify(this.history));
    }
    getHistory() {
        return this.history;
    }
}
const test = new CurrencyConverter();
//# sourceMappingURL=currencyConverter.js.map