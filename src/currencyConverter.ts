import { convertCurrency } from "./currencyService";
import type { currencyConversionRequest, currencyConversionResult } from "./types";
export class CurrencyConverter {
 
    private history:currencyConversionResult[] = []

    constructor(){
      const data =   localStorage.getItem("history")

      this.history = data ? JSON.parse(data): [];
    }

    async convert(
    request: currencyConversionRequest
   ): Promise<currencyConversionResult> {

    const result = await convertCurrency(request)

    this.history.push(result)

    this.saveHistory()

    return result
  }

  private saveHistory(){
        localStorage.setItem("history",JSON.stringify(this.history))
  }
  getHistory():currencyConversionResult[]{
        return  this.history
  }
}


const test = new CurrencyConverter()


