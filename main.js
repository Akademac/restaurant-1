//index.html menu batton
const btn = document.querySelector('#menuButton');

btn.addEventListener('click', () => {
	window.open('menu.html', '_self');
});

const resBtn = document.querySelector('#res');

resBtn.addEventListener('click', () => {
	window.open('reservations.html', '_self');
});

const caterBtn = document.querySelector('#catering');

caterBtn.addEventListener('click', () => {
	window.open('catering.html', '_self');
});





