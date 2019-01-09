const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map( (film) => film.title );
}

Cinema.prototype.findByTitle = function (filmTitle) {
  return this.films.find((film) => filmTitle === film.title);
}

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter((film) => genre === film.genre);
}

Cinema.prototype.yearExists = function (year) {
  return this.films.some((film) => year === film.year);
}

Cinema.prototype.allOverCertainRuntime = function (length) {
  return this.films.every((film) => length <= film.length);
}

Cinema.prototype.totalRuntime = function () {
  return this.films.reduce((runningTotal, film) => runningTotal + film.length,0);
}

Cinema.prototype.filterFilmsByProperty = function (property, propertyValue) {
  return this.films.filter((film) => propertyValue === film[property]);
}

module.exports = Cinema;
