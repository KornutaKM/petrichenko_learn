let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let film2 = prompt('Один из последних просмотренных фильмов?', '')
// let scoreOfFilm2 = +prompt('На сколько оцените его?', '')

// personalMovieDB.movies[film2] = scoreOfFilm2
let a
let b
let i = 0


// while (i < 2) {
// 	let a = prompt('Один из последних просмотренных фильмов?', '')
// 	let b = +prompt('На сколько оцените его?', '')
// 	personalMovieDB.movies[a] = b
// 	i++
// }

for (let i = 0; i < 2; i++) {
  let a= prompt('Один из последних просмотренных фильмов?', '');
  let b = +prompt('На сколько оцените его?', '');
  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB)
