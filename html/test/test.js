import Country from "../data/class_country.js";
import Currency from "../data/class_currency.js";
import Language from "../data/class_language.js";

function outsideTheContinent() {
    Country.fill_countries;
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

document.getElementById("btnOutsideContinent").addEventListener("click", outsideTheContinent);
document.getElementById("btnMoreNeighbors").addEventListener("click", moreNeighbors);
