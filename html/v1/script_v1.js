import Country from "../data/class_country.js";

Country.fill_countries()

let all_countries = Country.all_countries;
console.log(all_countries)

/**
 * Créer les tr de pays du table
 * @param {*} all_countries 
 */
function createTr(all_countries) {
    const tbody = document.querySelector("tbody")
    all_countries.forEach(element => {
        let tr = document.createElement("tr");
        createTd(tr,element)
        tbody.appendChild(tr)

    });
}
/**
 * 
 * @param {*} td 
 * @param {*} elementInfo 
 */
function createTd(tr,elementInfo) {
    let td1 = document.createElement("td") 
    td1.innerText = elementInfo.name;
    let td2 = document.createElement("td") 
    td2.innerText = elementInfo.population;
    let td3 = document.createElement("td") 
    td3.innerText = elementInfo.area;
    let td4 = document.createElement("td") 
    td4.innerText = elementInfo.subregion;
    let td5 = document.createElement("td") 
    td5.innerText = elementInfo.getPopDensity;
    
    /* Drapeau
    
    let td6 = document.createElement("td") 
    td6.innerText(elementInfo.name);*/
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    //tr.appendChild(td6)
    

}

createTr(all_countries)