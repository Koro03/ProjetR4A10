import countries  from "./countries.js";

class Language {
    constructor(iso_639_2, name) {
        this.name = name;
        this.iso639_2 = iso_639_2;
    }

    toString() {
        return this.name + " (" + this.iso639_2 + ")";
    }

    static all_languages = [];

    static fill_languages() {
        countries.forEach(country => {
            country.languages.forEach(lang => {
                Language.all_languages.push(new Language(lang.iso639_2, lang.name));
            });
        });
    }

    get getName() {
        return this.name;
    }
}

Language.fill_languages();
export default Language