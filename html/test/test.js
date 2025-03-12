import { countries } from "../data/countries.js";

function outsideTheContinent() {
    Country.fill_countries
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

    return tabPaysFrontalierHorsContinent
}

function moreNeighbors() {
    let tabMaxDeVoisin = []
    const all_countries = Country.all_countries
    // recup tout les voisin sort dans l'ordre décroissant
    all_countries.forEach(element => {
        
    });
}