import countries  from "./countries.js";
import Currency from './class_currency.js';
import Language from './class_language.js';

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
        countries.forEach(country => {
            if(country.currencies){
                Country.all_countries.push(new Country(
                    country.alpha3Code,
                    country.name,
                    country.capital,
                    country.subregion,
                    country.population,
                    country.area,
                    country.borders,
                    country.currencies.map(currency => new Currency(currency.code, currency.name, currency.symbol)),              
                    country.languages.map(language => new Language(language.iso639_2, language.name))
                ));
            }else{
                country.currencies = [];
            }
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
        return this.currencies;
    }

    get getLanguages(){
        return this.languages;
    }
}


Country.fill_countries();
console.log(Country.all_countries);

export default Country