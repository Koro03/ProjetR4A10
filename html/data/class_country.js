import {countries} from './countries.js';


class Country {

    static all_countries = [];

    constructor(alphaCode, name, capital, subregion, population, area, bordersArray, currenciesArray, languageArray){
        this.alpha3Code = alphaCode;
        this.name = name;
        this.capitale = capital;
        this.subregion = subregion;
        this.population = population;
        this.area = area;
        this.borders = bordersArray;
        this.currencies = currenciesArray;
        this.languages = languageArray;
    }

    toString(){
        return `${this.alpha3Code}, ${this.name}, ${this.capitale}, ${this.subregion}, ${this.population}, ${this.getBorders()}`;
    }

    static fill_countries(){
        countries.forEach(element => {
            this.all_countries[element["alapha3code"]] = new Country(
                element["alapha3code"],
                element["name"],
                element["capital"],
                element["subregion"],
                element["population"],
                element["area"],
                element["borders"],
                new Currency(element["currencies"].code, element["currencies"].name, element["currencies"].symbol),
                new languages(element["languages"].iso639_2, element["languages"].name)
            );
        });
    }

    get getPopDensity(){
        return this.population / this.area; 
    }

    get getBorders(){
       return this.borders.map(border => {
           return Country.all_countries[border].name;
       });
    }

    get getCurrencies(){
        return this.currencies.map(currency => {
            return currency.name;
        });
    }
}