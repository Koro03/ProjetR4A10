import Country from "../data/class_country.js";
import Currency from "../data/class_currency.js";
import Language from "../data/class_language.js";

function outsideTheContinent() {
    Country.fill_countries();
    let tabPaysFrontalierHorsContinent = [];
    const all_countries = Country.all_countries;
    all_countries.forEach(element => {
        let tabTempPaysFront = element.getBorders;
        tabTempPaysFront.forEach(element2 => {
            if (element2.subregion != element.subregion ) {
                if (!tabPaysFrontalierHorsContinent.includes(element) ) {
                    tabPaysFrontalierHorsContinent.push(element)
                }
                if (!tabPaysFrontalierHorsContinent.includes(element2)) {
                    tabPaysFrontalierHorsContinent.push(element2)
                }
            }
        });
    });
    console.log(tabPaysFrontalierHorsContinent);
    return tabPaysFrontalierHorsContinent;
}

function moreNeighbors() {
    const all_countries = Country.all_countries
    let tabPaysNBVoisin = [];
    // recup tout les voisin sort dans l'ordre décroissant
    all_countries.forEach(element => {
        tabPaysNBVoisin.push({
            country : element, 
            bordersCount : element.getBorders.length
        });
    });

    tabPaysNBVoisin.sort((a, b) => b.bordersCount - a.bordersCount);
    console.log(tabPaysNBVoisin);
}

function neighborsLess() {
    let tabPasVoisin = []
    const all_countries = Country.all_countries
    all_countries.forEach(element => {
        if (element.getBorders.length === 0) {
            tabPasVoisin.push(element);
        }
    });
    console.log(tabPasVoisin);
    return tabPasVoisin;
}


function moreLanguages() {
    const all_countries = Country.all_countries
    let tabMoreLanguages = [];
    
    all_countries.forEach(element => {
        tabMoreLanguages.push({
            country : element, 
            languagesCount : element.getLanguages.length
        });
    });

    tabMoreLanguages.sort((a, b) => b.languagesCount - a.languagesCount);
    console.log(tabMoreLanguages);
}


function withCommonLanguage() {
    const all_countries = Country.all_countries;
    let tabCommonLanguage = [];

    all_countries.forEach(element => {
        let border = element.getBorders;
        let languages = element.getLanguages;
        border.forEach(element2 => {
            let commonLanguage = element2.getLanguages;
            if (commonLanguage.some(lang => element2.getLanguages.some(lang2 => lang === lang2))) {
                if (!tabCommonLanguage.includes(element)) {
                    tabCommonLanguage.push({
                        Country1 : element,
                        Country2 : element2,
                        CommonLanguage : element.getLanguages
                    });
                }
            }
        });
    });

    console.log(tabCommonLanguage);
    return tabCommonLanguage;
}


document.getElementById("btnOutsideContinent").addEventListener("click", outsideTheContinent);
document.getElementById("btnMoreNeighbors").addEventListener("click", moreNeighbors);
document.getElementById("neighborlessBtn").addEventListener("click", neighborsLess);
document.getElementById("moreLanguagesBtn").addEventListener("click", moreLanguages);
document.getElementById("withCommonLanguageBtn").addEventListener("click", withCommonLanguage);

