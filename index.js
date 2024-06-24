function bookList() {
	const cancel = document.querySelector('.cancel_button');
	const banner = document.querySelector('.cursiva_book');
	const cursiva_card = document.getElementById('cursiva_book');
	cursiva_card.addEventListener('click', () => {
		banner.style.display = 'flex';
	});

	cancel.addEventListener('click', () => {
		banner.style.display = 'none';
	});
}

function carrusel() {
	window.onload = function () {
		const IMGS = [
			'./img/cursiva-page-one.png',
			'./img/cursiva-page-two.png',
			'./img/cursiva-page-three.png',
			'./img/cursiva-page-four.png',
		];

		let position = 0;
		let prevButton = document.querySelector('#prev');
		let nextButton = document.querySelector('#next');
		let img = document.querySelector('.slide');

		function nextPhoto() {
			if (position >= IMGS.length - 1) {
				position = 0;
			} else {
				position++;
			}
			renderIMG();
		}

		function prevPhoto() {
			if (position <= IMGS.length - 1) {
				position = 0;
			} else {
				position--;
			}
			renderIMG();
		}

		function renderIMG() {
			img.style.backgroundImage = `url(${IMGS[position]})`;
		}

		nextButton.addEventListener('click', nextPhoto);
		prevButton.addEventListener('click', prevPhoto);

		renderIMG();
	};
}
(() => {
	bookList();
	carrusel();
})();
