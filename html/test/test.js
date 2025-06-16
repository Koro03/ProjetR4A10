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

    //parcours de tous les pays
    all_countries.forEach(element => {

        //récupération des pays voisins
        let border = element.getBorders;
        //récupération des langues
        let languages = element.getLanguages;

        //pour chaque pays voisins
        border.forEach(borderCountry => {
            let borderLanguages = borderCountry.getLanguages;

            // Vérifier si les deux pays partagent une langue commune
            let commonLanguages = languages.filter(lang => borderLanguages.includes(lang));
            if (commonLanguages.length > 0) {
                tabCommonLanguage.push({
                    Country1: element,
                    Country2: borderCountry,
                    CommonLanguages: languages.filter(lang => borderLanguages.includes(lang))
                });
            }
        });
    });
    console.log(tabCommonLanguage);
    return tabCommonLanguage;
}



function withoutCommonCurrency() {
    const all_countries = Country.all_countries;
    let tabCommonCurrency = [];

    all_countries.forEach(element => {
        let border = element.getBorders;
        let elementCurrency = element.getCurrencies;

        border.forEach(element2 => {
            let element2Currency = element2.getCurrencies;
            if (elementCurrency.some(curr => element2.getCurrencies.some(curr2 => curr === curr2))) {
                if (!tabCommonCurrency.includes(element)) {
                    tabCommonCurrency.push({
                        Country1 : element,
                        Country2 : element2,
                        CommonCurrency : element.getCurrencies
                    });
                }
            }
        });
    });
    console.log(tabCommonCurrency);
    return tabCommonCurrency;
}


function sortingDecreasingDensity() {
    const all_countries = Country.all_countries;
    let tabDensity = [];

    all_countries.forEach(element => {
        tabDensity.push({
            country : element, 
            density : element.getPopDensity
        });
    });
    tabDensity.sort((a, b) => b.density - a.density);
    console.log(tabDensity);
    return tabDensity;
}


function moreTopLevelDomains() {
    const all_countries = Country.all_countries;
    let tabTopLevelDomains = [];

    all_countries.forEach(element => {
        let topLevelDomain = element.getTopLevelDomain;
        if (topLevelDomain) {
            tabTopLevelDomains.push(topLevelDomain);
        }
    });

    console.log(tabTopLevelDomains);
    return tabTopLevelDomains;
}

document.getElementById("btnOutsideContinent").addEventListener("click", outsideTheContinent);
document.getElementById("btnMoreNeighbors").addEventListener("click", moreNeighbors);
document.getElementById("neighborlessBtn").addEventListener("click", neighborsLess);
document.getElementById("moreLanguagesBtn").addEventListener("click", moreLanguages);
document.getElementById("withCommonLanguageBtn").addEventListener("click", withCommonLanguage);
document.getElementById("withoutCommonCurrencyBtn").addEventListener("click", withoutCommonCurrency);
document.getElementById("sortingDecreasingDensityBtn").addEventListener("click", sortingDecreasingDensity);
document.getElementById("moreTopLevelDomainsBtn").addEventListener("click", moreTopLevelDomains);


