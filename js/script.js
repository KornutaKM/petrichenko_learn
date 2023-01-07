'use strict';

// let i = 0;
// while (i < 2) {
//   let a = prompt('Один из последних просмотренных фильмов?', '');
//   let b = +prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     i++;
//   } else {
//     console.log('error');
//     i--;
//   }
// }

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = +prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}



function detectPersonalLevel() {
  personalMovieDB.count < 10
    ? console.log('Просмотрено довольно мало фильмов')
    : personalMovieDB.count < 30
    ? console.log('Вы классический зритель')
    : console.log('Вы киноман');
  console.log(personalMovieDB);
}


function checkPrivat() {
  if (personalMovieDB.privat == false) console.log(personalMovieDB);
}




function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
		personalMovieDB['genres'].push(genre)
	}
}
start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres()
checkPrivat();