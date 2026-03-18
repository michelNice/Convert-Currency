import type { currencyConversionRequest, currencyConversionResult } from "./types";
export declare class CurrencyConverter {
    private history;
    constructor();
    convert(request: currencyConversionRequest): Promise<currencyConversionResult>;
    private saveHistory;
    getHistory(): currencyConversionResult[];
}
//# sourceMappingURL=currencyConverter.d.ts.map