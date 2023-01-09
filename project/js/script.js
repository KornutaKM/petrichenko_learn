/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



let adv = document.querySelectorAll('.promo__adv img')
adv.forEach(el => el.remove())

document.querySelector('.promo__genre').textContent = 'Драма';

let poster = document.querySelector('.promo__bg')
poster.style.backgroundImage = "url('img/bg.jpg')";

let movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ''

const movieDB = {
	movies: [
		 "Логан",
		 "Лига справедливости",
		 "Ла-ла лэнд",
		 "Одержимость",
		 "Скотт Пилигрим против..."
	]
};



movieDB.movies.sort()

movieDB.movies.forEach((film,i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i+1}. ${film.toUpperCase()}
	<div class="delete"></div>
</li>
	`
})

