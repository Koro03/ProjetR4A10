class Currency{

    static currencies = [];

    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }

    toString(){
        return `${this.code}, ${this.name}, ${this.symbol}`;
    }


    fill_currencies(){
        countries.forEach(element => {
            Currency.currencies.push(new Currency(element[currencies][code], element[currencies][name], element[currencies][symbol]));
        });
    }
}