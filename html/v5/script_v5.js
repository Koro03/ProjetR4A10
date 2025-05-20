import Country from "../data/class_country.js";

Country.fill_countries()

let all_countries = Country.all_countries;

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

function renderTable(startItem,numberItem){

    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    createTr(all_countries.slice(startItem,numberItem))
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
    renderTable(startItem,lastItem)
})

let buttonPrev = document.querySelector("#prev")
buttonPrev.addEventListener("click",()=>{
    if (startItem === 0) {
        return
    }
    startItem = startItem - numberItem
    lastItem = lastItem - numberItem
    renderTable(startItem,lastItem)
})

renderTable(startItem,numberItem)



/**
 * Fonction d'affichage des détails d'un pays
 * @param {*} country 
 * @returns un element html contenant les détails du pays
 */

function createCountryDetails(country) {
    console.log(country);
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



/**
 * Ajout d'ecouteur sur les en-tete du tableau
 */
document.querySelectorAll("td").forEach((element) => {
    element.addEventListener("click", () => {
        let selection = element.innerText;
        //Appel de la fonction de tri
        tri(selection);
    });
});

/**
 * Fonction de tri du tableau
 * @param {*} selection
 */

function tri(selection) {
    if (selection === "Nom en français") {
        all_countries.sort((a, b) => a.name.localeCompare(b.name));
    }else if(selection === "Population") {
        all_countries.sort((a, b) => a.population - b.population);
    }else if (selection === "Surface") {
        all_countries.sort((a, b) => a.area - b.area);
    }else if (selection === "Densité de population") {
        all_countries.sort((a, b) => a.getPopDensity - b.getPopDensity);
    }else if (selection === "Continent et appartenance") {
        all_countries.sort((a, b) => a.subregion.localeCompare(b.subregion));
    }
    renderTable(startItem,numberItem);
}