import { series } from "./data.js";
const seriesTbody = document.getElementById("series");
const averageElm = document.getElementById("average");
const cardContainer = document.getElementById("serie-detail");
renderSeriesInTable(series);
averageElm.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
    });
    const links = document.querySelectorAll(".serie-link");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = event.target;
            const id = Number(target.getAttribute("data-id"));
            const serie = series.find((s) => s.id === id);
            if (serie) {
                showSerieDetail(serie);
            }
        });
    });
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    let average = 0;
    for (const serie of series) {
        totalSeasons += serie.seasons;
    }
    if (series.length > 0) {
        average = totalSeasons / series.length;
    }
    return Math.round(average);
}
function showSerieDetail(serie) {
    cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" target="_blank" class="btn btn-primary">See more</a>
      </div>
    </div>
  `;
}
//# sourceMappingURL=main.js.map