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
        countries.forEach(element => {
            Currency.all_currencies[element["currencies"][0]["code"]] = new Currency(
                element["currencies"][0]["code"],
                element["currencies"][0]["name"],
                element["currencies"][0]["symbol"]
            );
        });
    }
}

export default Currency