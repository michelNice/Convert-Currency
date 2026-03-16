export function populateCurrencySelect(fromSelect, toSelect) {
    const currencyList = {
        USA: { name: 'United States dollar', symbol: '$', value: 1.0 },
        EUR: { name: "Euro", symbol: "€", value: 0.92 },
        GBP: { name: "Pound sterling", symbol: "£", value: 0.80 },
        BRL: { name: "Brazilian Real", symbol: "R$", value: 5.00 },
        JPY: { name: "Japanese Yen", symbol: "¥", value: 150.00 },
        CAD: { name: "Canadian Dollar", symbol: "C$", value: 1.35 },
        AUD: { name: "Australian Dollar", symbol: "A$", value: 1.50 },
        CHF: { name: "Swiss Franc", symbol: "CHF", value: 0.90 },
        CNY: { name: "Chinese Yuan", symbol: "¥", value: 7.20 },
        RUB: { name: "Russian Ruble", symbol: "₽", value: 90.00 }
    };
    Object.entries(currencyList).forEach(([code, currency]) => {
        const options1 = document.createElement('option');
        options1.value = code;
        options1.textContent = `${code} - ${currency.symbol}`;
        const options2 = document.createElement('option');
        options2.value = code;
        options2.textContent = `${code} - ${currency.symbol}`;
        fromSelect.appendChild(options1);
        toSelect.appendChild(options2);
    });
}
//# sourceMappingURL=moedas.js.map