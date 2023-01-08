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
  privat: true,

  start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', '');
      let b = +prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        this.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel() {
    this.count < 10
      ? console.log('Просмотрено довольно мало фильмов')
      : this.count < 30
      ? console.log('Вы классический зритель')
      : console.log('Вы киноман');
    console.log(this);
  },

  checkPrivat() {
   console.log(personalMovieDB.privat);
  },

  writeYourGenres() {
	
    for (let i = 1; i < 4; i++) {
		
      let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
		if (genre != null && genre != ''){
      this['genres'].push(genre);
		} else {
			i--
		}
    }
	 this.genres.forEach((item,index) => {
		console.log(`Любимый жанр номер ${index+1} - это ${item}`)
	 })
  },
  toggleVisibleMyDB() {
	return this.privat = this.privat == false ? true : false 
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.checkPrivat();

