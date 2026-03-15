import type { currencyConversionRequest, currencyConversionResult } from "./types";

export async function convertCurrency(
  request: currencyConversionRequest
): Promise<currencyConversionResult>{
    const url = "https://api.exchangerate-api.com/v4/latest/"; 
    try {
       const response = await fetch(`${url}${request.fromCurrency}`)

       const data = await response.json();

       const rate = data.rates[request.toCurrency]

       console.log(data)

       if(!rate){
         throw new Error(request.toCurrency)
       }
       const convertedAmount = request.amount * rate

       return{
          originalAmount: request.amount,
          convertedAmount: convertedAmount,
          fromCurrency: request.fromCurrency,
          toCurrency: request.toCurrency,
          exchangeRate: rate,
          date: new Date().toISOString()

       }
        
    } catch (error) {
        console.log(error)
        throw error
    }
}



