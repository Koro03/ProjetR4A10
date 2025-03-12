import Country from "../data/class_country.js";
import Currency from "../data/class_currency.js";
import Language from "../data/class_language.js";

function outsideTheContinent() {
    Country.fill_countries();
    let tabPaysFrontalierHorsContinent = [];
    const all_countries = Country.all_countries;
    all_countries.forEach(element => {
        let tabTempPaysFront = element.getBorders()
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
    console.log(all_countries);
    console.log("fonction outsideTheContinent");
    console.log(tabPaysFrontalierHorsContinent);
    return tabPaysFrontalierHorsContinent
}

function moreNeighbors() {
    let tabMaxDeVoisin = []
    const all_countries = Country.all_countries
    // recup tout les voisin sort dans l'ordre décroissant
    console.log(all_countries)
}

function neighborsLess() {
    let listePaysSansVoisin = []
    const all_countries = Country.all_countries
    // recup tout les voisin sort dans l'ordre décroissant
    all_countries.forEach(country => {
        if((country.subregion).length() == 0){
            listePaysSansVoisin.push(country)
        }
        
    });
}
function withCommonLanguage() {
    let listeSansLangueCommuneAvecSesVoisins = []
    const all_countries = Country.all_countries

    let tabLanguageByCountry = []

    all_countries.forEach(country => {
        //TODO enlever cette boucle
        //remplir un tableau temporaire des languages de country
        country.languages.forEach(langue => {
            tabLanguageByCountry.push(langue)
        });
        //tester pour chaque voisin de country si leurs langues sont parlé dans le pays 
         
        country.subregion.forEach(voisin => {
            tabLanguageByCountry.forEach(langueDuPays => {
                if (
                    voisin.languages.includes(langueDuPays) 
                    && !(listeSansLangueCommuneAvecSesVoisins.includes(country))
                ) {
                    listeSansLangueCommuneAvecSesVoisins.push(country)
                }
            });
            
            
        });
        
        
    });
}

function withoutCommonCurrency() {
    let listeSansMonnaieCommuneAvecSesVoisins = []
    const all_countries = Country.all_countries

    let tabMoneyByCountry = []

    all_countries.forEach(country => {
        //TODO enlever cette boucle

        //remplir un tableau temporaire des languages de country
        country.currencies.forEach(money => {
            tabLanguageByCountry.push(langue)
        });
        //tester pour chaque voisin de country si leurs langues sont parlé dans le pays 
        country.subregion.forEach(voisin => {
            tabLanguageByCountry.forEach(langueDuPays => {
                if (
                    voisin.languages.includes(langueDuPays) 
                    && !(listeSansLangueCommuneAvecSesVoisins.includes(country))
                ) {
                    listeSansLangueCommuneAvecSesVoisins.push(country)
                }
            });
            
            
        });
        
        
    });
}

document.getElementById("btnOutsideContinent").addEventListener("click", outsideTheContinent);
document.getElementById("btnMoreNeighbors").addEventListener("click", moreNeighbors);
