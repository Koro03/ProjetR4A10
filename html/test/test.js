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

    all_countries.forEach(country => {
        const neighbors = country.getBorders;
        const countryLangCodes = country.getLanguages.map(lang => lang.iso639_2);

        neighbors.forEach(neighbor => {
            const neighborLangCodes = neighbor.getLanguages.map(lang => lang.iso639_2);

            const commonCodes = countryLangCodes.filter(code => neighborLangCodes.includes(code));

            if (commonCodes.length > 0) {
                const pairExists = tabCommonLanguage.some(entry => 
                    (entry.Country1 === neighbor && entry.Country2 === country) ||
                    (entry.Country1 === country && entry.Country2 === neighbor)
                );

                if (!pairExists) {
                    tabCommonLanguage.push({
                        Country1: country,
                        Country2: neighbor,
                        CommonLanguages: country.getLanguages.filter(lang =>
                            neighborLangCodes.includes(lang.iso639_2)
                        )
                    });
                }
            }
        });
    });

    console.log(tabCommonLanguage);
    return tabCommonLanguage;
}




function withoutCommonCurrency() {
    const all_countries = Country.all_countries;
    let tabNoCommonCurrency = [];

    all_countries.forEach(country => {
        const neighbors = country.getBorders;
        const currencyCodes = country.getCurrencies.map(curr => curr.code);

        neighbors.forEach(neighbor => {
            const neighborCurrencyCodes = neighbor.getCurrencies.map(curr => curr.code);

            const hasCommon = currencyCodes.some(code => neighborCurrencyCodes.includes(code));

            const alreadyLogged = tabNoCommonCurrency.some(entry =>
                (entry.Country1 === neighbor && entry.Country2 === country) ||
                (entry.Country1 === country && entry.Country2 === neighbor)
            );

            if (!hasCommon && !alreadyLogged) {
                tabNoCommonCurrency.push({
                    Country1: country,
                    Country2: neighbor
                });
            }
        });
    });

    console.log(tabNoCommonCurrency);
    return tabNoCommonCurrency;
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


