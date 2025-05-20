import countries from "./countries.js";

class Currency{

    static all_currencies = [];

    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }

    toString(){
        return `${this.code}, ${this.name}, ${this.symbol}`;
    }


    static fill_currencies(){
        countries.forEach(country => {
            if (country.currencies) {
                country.currencies.forEach(currency => {
                    Currency.all_currencies.push(new Currency(currency.code, currency.name, currency.symbol));
                });
            }
        });
    }
}


Currency.fill_currencies();

console.log(Currency.all_currencies);

export default Currency