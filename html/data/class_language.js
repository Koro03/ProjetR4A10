import { countries } from "./countries.js";

class Language {

    constructor(iso_639_2,name) {
        this.all_languages = []
        this.name = name;
        this.iso_639_2 = iso_639_2;
    }
    toString() {
        return this.name +"(" + this.iso_639_2 + ")"
    }
    static fill_languages() {
        /*for (let index = 0; index < countries[languages].length; index++) {
            const element = array[index];
            
        }*/

        countries.forEach(element => {
            element["languages"].forEach(element => {
                this.all_languages.push(new Language(element["name"],element["iso_639_2"]))

            });
        });
    }
}

const countriesLanguages = Language().fill_languages;






 