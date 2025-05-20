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
    }


    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    

}

createTr(all_countries)