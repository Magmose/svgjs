import 'bootstrap/dist/css/bootstrap.css'
const root = document.getElementById("root");
const text = document.getElementById("text");
//const url = "http://localhost:8084/JavaBackEndExamPrep1/api/country/";
const url = "http://restcountries.eu/rest/v1/alpha?codes="

root.addEventListener("click", fetchCountry);
var selected = document.getElementById("es");
function fetchCountry(e) {
    selected.style.fill = "#c0c0c0";
    selected = document.getElementById(e.target.id)
    selected.style.fill = "red";
    text.innerHTML = "";
    console.log(url + e.target.id.split("-")[0]);
    fetch(url + e.target.id.split("-")[0])
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0].name)
            text.innerHTML += "Name: " + data[0].name + "<br>";
            text.innerHTML += "Population: " + data[0].population + "<br>";
            text.innerHTML += "Area: " + data[0].area + "<br>";
            text.innerHTML += "Borders: " + data[0].borders + "<br>";
        })
}
