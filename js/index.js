"use strict";

const input = document.querySelector("#inp"),
  button = document.getElementById("btn"),
  div = document.querySelector(".info-block"),
  infoCountryName = document.querySelector(".info-country-name"),
  infoCountryResult = document.querySelector(".info-country-result"),
  infoAreaName = document.querySelector(".info-area-name"),
  infoAreaResult = document.querySelector(".info-area-result"),
  infoCapitalName = document.querySelector(".info-capital-name"),
  infoCapitalResult = document.querySelector(".info-capital-result"),
  infoPopulation = document.querySelector(".info-population"),
  infoPopulationResult = document.querySelector(".info-population-result"),
  infoFlags = document.querySelector(".info-flags"),
  infoFlagsResult = document.querySelector(".info-flags-result"),
  flag = document.querySelector(".flag"),
  infoMaps = document.querySelector(".info-maps"),
  map = document.querySelector("#info-maps-result");

button.addEventListener("click", click);
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    click();
  }
});
function click() {
  const country = input.value;

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      let { name, area, capital, population, latlng, flags } = data[0];
      infoCountryName.textContent = `country`;
      infoCountryResult.textContent = name.common;
      infoAreaName.textContent = `area`;
      infoAreaResult.textContent = area;
      infoCapitalName.textContent = `capital`;
      infoCapitalResult.textContent = capital;
      infoPopulation.textContent = `population`;
      infoPopulationResult.textContent = population;
      infoFlags.textContent = `flag`;
      flag.src = flags.png;
      infoMaps.textContent = `map`;
      insertMap(latlng, "info-maps-result");
    });
}

function insertMap([long, lat], rootDivId) {
  const div = document.getElementById(rootDivId);
  div.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6525227.536969153!2d${lat}!3d${long}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1644161120067!5m2!1sen!2sus"
    width="500px"
    height="200px"
    margin-left = "20px"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"></iframe>`;
}
