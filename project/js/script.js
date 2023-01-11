/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let genre = document.querySelector('.promo__genre');
let poster = document.querySelector('.promo__bg');
let adv = document.querySelectorAll('.promo__adv img');
let movieList = document.querySelector('.promo__interactive-list');
let addForm = document.querySelector('form.add');
let addInput = addForm.querySelector('.adding__input');
let checkbox = addForm.querySelector('[type = "checkbox"]');

document.addEventListener('DOMContentLoaded', () => {
  const deleteAdv = (arr) => {
    arr.forEach((el) => el.remove());
  };

  const makeChanges = () => {
    poster.style.backgroundImage = "url('img/bg.jpg')";
    genre.textContent = 'Драма';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = addInput.value;
    const favourite = checkbox.checked;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}... `;
      }

		if(favourite) {
			console.log('Добавляем любимый фильм')
		}
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    films.forEach((film, i) => {
      parent.innerHTML += `
	  <li class="promo__interactive-item">${i + 1}. ${film.toUpperCase()}
	  <div class="delete"></div>
  </li>
	  `;
    });

    document.querySelectorAll('.delete').forEach((el, i) => {
      el.addEventListener('click', () => {
        el.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(movieDB.movies, movieList);
      });
    });
	 sortArr(movieDB.movies);
  }

  deleteAdv(adv);
  makeChanges();
  
  createMovieList(movieDB.movies, movieList);
});
