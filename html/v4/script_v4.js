import Country from "../data/class_country.js";
import Language from "../data/class_language.js";

Country.fill_countries()

let all_countries = Country.all_countries;
let languages = Language.all_languages;

let all_languages = new Set()
let all_continent = new Set()
let all_pays = new Set()

languages.forEach(lang => all_languages.add(lang.name))
all_countries.forEach(element => {
    all_continent.add(element.subregion)
});

all_countries.forEach(element => {
    all_pays.add(element.name)
});

let filters = {
    continent: null,
    language: null,
    search: ""
};
let filteredCountries = [...all_countries];


/**
 * Créer les tr de pays du table
 * @param {*} all_countries 
 */
function createTr(all_countries) {
    const tbody = document.querySelector("tbody")
    all_countries.forEach(element => {
        let tr = document.createElement("tr");
        createTd(tr,element);

        //Ajout d'un ecouteur sur chaque tr
        tr.addEventListener("click", () => {
            // Créer les détails du pays
            createCountryDetails(element);
        });
        tbody.appendChild(tr);
    });
}
/**
 * Créer les td du tableau
 * @param {*} td 
 * @param {*} elementInfo 
 */
function createTd(tr,elementInfo) {
    let td1 = document.createElement("td") ;
    td1.id = "nom";
    if (elementInfo.name === undefined ||elementInfo.name === NaN || elementInfo.name === 0  ) {
        td1.innerText = "N/A";
    }else{
        td1.innerText = elementInfo.name;
    }

    let td2 = document.createElement("td") 
    if (elementInfo.population === undefined ||elementInfo.population === NaN || elementInfo.population === 0) {
        td2.innerText = "N/A";
    }else{

        td2.innerText = elementInfo.population;
    }

    let td3 = document.createElement("td") 
    if (elementInfo.area === undefined ||elementInfo.area === NaN || elementInfo.area === 0) {
        td3.innerText = "N/A";
    }else{
        td3.innerText = elementInfo.area;
    }

    let td4 = document.createElement("td") 
    if (elementInfo.getPopDensity === undefined ||elementInfo.getPopDensity === NaN || elementInfo.getPopDensity === 0) {
        td4.innerText = "N/A";
    }else{

        td4.innerText = elementInfo.getPopDensity;
    }

    let td5 = document.createElement("td") 
    if (elementInfo.subregion === undefined ||elementInfo.subregion === NaN || elementInfo.subregion === 0) {
        td5.innerText = "N/A";     
    }else{
        td5.innerText = elementInfo.subregion;
    }
    
    let td6 = document.createElement("td");
    if (elementInfo.flags === undefined ||elementInfo.flags === NaN || elementInfo.flags === 0) {
        td6.innerHTML = "N/A";
    }else{
        td6.innerHTML = `<img src="${elementInfo.flags.svg}" alt="flags">`;
        td6.addEventListener("click", () => {
            window.open(elementInfo.flags.svg, "_blank");
        });
    }
    
 
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
}

function renderTable(startItem,numberItem,data){

    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    createTr(data.slice(startItem,numberItem))
}


const numberItem = 24
let startItem = 0
let lastItem = numberItem;

let buttonNext = document.querySelector("#next")
buttonNext.addEventListener("click",()=>{
    if (lastItem >= all_countries.length) {
        return
    }
    startItem = startItem + numberItem
    lastItem = lastItem + numberItem
    renderTable(startItem,lastItem,all_countries)
})

let buttonPrev = document.querySelector("#prev")
buttonPrev.addEventListener("click",()=>{
    if (startItem === 0) {
        return
    }
    startItem = startItem - numberItem
    lastItem = lastItem - numberItem
    renderTable(startItem,lastItem,all_countries)
})

renderTable(startItem,numberItem,all_countries)

/**
 * Fonction d'affichage des détails d'un pays
 * @param {*} country 
 * @returns un element html contenant les détails du pays
 */

function createCountryDetails(country) {
    //Supprimer les dbalise deja présentes
    document.querySelectorAll('.country-details-modal').forEach(e => e.remove());
    
    
    //Création de la div détails
    let div = document.createElement("div");
    div.classList.add("country-details-modal");
    div.innerHTML = `
        <div class="country-details-top">
            <h2>${country.name}</h2>
            <button class="country-details-close" title="Fermer">×</button>
        </div>
        <div class="country-details-content">
            <p>Capital : ${country.capitale}</p>
            <p>Money : ${country.currencies}</p>
            <p>Languages : ${country.languages}</p>
        </div>
        
    `;

    let closeButton = div.querySelector(".country-details-close");
    closeButton.addEventListener("click", () => div.remove());
    document.body.appendChild(div);
}

function createAllLanguageFilter() {
    const selectLanguageFilter = document.querySelector("#langueFilter");
    all_languages.forEach(element => {
        let op = optionForSelect(element);
        selectLanguageFilter.appendChild(op);
    });

    selectLanguageFilter.addEventListener("change", () => {
        const filter = selectLanguageFilter.value;
        filters.language = filter || null;
        applyAllFilters();
    });
}


function createAllContinent() {
    const selectContinentFilter = document.querySelector("#continentFilter");
    all_continent.forEach(element => {
        let op = optionForSelect(element, element);
        selectContinentFilter.appendChild(op);
    });

    selectContinentFilter.addEventListener("change", () => {
        const filter = selectContinentFilter.value;
        filters.continent = filter || null;
        applyAllFilters();
    });
}


function createAllPaysFilter() {
    const selectPaysFilter = document.querySelector("#paysFilter");

    selectPaysFilter.addEventListener("input", () => {
        const filter = selectPaysFilter.value.trim();
        filters.search = filter;
        applyAllFilters();
    });
}


function applyAllFilters() {
    filteredCountries = all_countries.filter(countrie => {
        const matchContinent = filters.continent ? countrie.subregion === filters.continent : true;
        const matchLang = filters.language ? countrie.languages.some(lang => lang.name === filters.language) : true;
        const matchSearch = filters.search ? countrie.name.toLowerCase().includes(filters.search.toLowerCase()) : true;
        return matchContinent && matchLang && matchSearch;
    });

    startItem = 0;
    lastItem = numberItem;
    renderTable(startItem, lastItem, filteredCountries);
}



function optionForSelect(value) {
    let option = document.createElement("option");
    option.value = value
    option.text = value
    return option
}
createAllLanguageFilter()
createAllContinent()
createAllPaysFilter()