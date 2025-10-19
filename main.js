import { series } from "./data.js";
const seriesTbody = document.getElementById("series");
const averageElm = document.getElementById("average");
renderSeriesInTable(series);
averageElm.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
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
//# sourceMappingURL=main.js.map