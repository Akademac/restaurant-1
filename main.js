//index.html menu batton
const btn = document.querySelector('#menuButton');

btn.addEventListener('click', () => {
	window.open('menu.html', '_self');
});

const resBtn = document.querySelector('#res');

resBtn.addEventListener('click', () => {
	window.open('reservations.html', '_self');
});

const caterBtn = document.querySelector('#catering')

caterBtn.addEventListener('click', () => {
	window.open('catering.html', '_self');
});

window.addEventListener('load', () => {
	let menu_divs = document.querySelectorAll('.menu_div');

	menu_divs.forEach(x => {
		x.addEventListener('click', event => {
			let value = event.target.dataset.filter;

			switch(value) {
				case 'breakfastDiv':
					window.open('menu.html#breakfast_2', '_self');
				break;
				case 'lunchDiv':
					window.open('menu.html#lunch_2', '_self');
				break;
				case 'dinnerDiv':
					window.open('menu.html#dinner_2', '_self');
				break;
				default:
					false;

			};
		});
	});

	let quotes = document.querySelector('#quotes');

	let quoteData = '';

	let dots = document.querySelectorAll('.dots');

	fetch('https://akademac.github.io/JSON/testJson.json')
 	 .then(function(response) {
    	return response.json();
 	 })
  	.then(function(myJson) {
   		console.log(myJson[17].name);

   		quoteData = quoteData = `<p id='quote_1' class='quotes'>${myJson[16].quote}</p>
						<p>${myJson[16].name}</p>`;
		quotes.innerHTML = quoteData;

		dots.forEach(dot => {
			dot.addEventListener('click', event => {
				let singleDot = event.target.dataset.dot;
				if(singleDot === 'first') {
			   		quoteData = `<p id='quote_1' class='quotes'>${myJson[16].quote}</p>
						<p>${myJson[16].name}</p>`;
						}
				else if(singleDot === 'second') {
			   		quoteData = `<p id='quote_1' class='quotes'>${myJson[17].quote}</p>
						<p>${myJson[17].name}</p>`;
				}
				else{
				  	quoteData = `<p id='quote_1' class='quotes'>${myJson[18].quote}</p>
						<p>${myJson[18].name}</p>`;
				}
	
			quotes.innerHTML = quoteData;

			});
		});
 	
 	let changeQuotes;

 	let objName = 16;

 	changeQuotes = setInterval(() => {
 		if(objName === 16) {
 			quoteData = quoteData = `<p id='quote_1' class='quotes'>${myJson[objName].quote}</p>
						<p>${myJson[objName].name}</p>`;
			quotes.innerHTML = quoteData;
			objName++

		}
		else if(objName === 17) {
			 quoteData = quoteData = `<p id='quote_1' class='quotes'>${myJson[objName].quote}</p>
						<p>${myJson[objName].name}</p>`;
			quotes.innerHTML = quoteData;
			objName++;
		}
		else if(objName === 18) {
			quoteData = quoteData = `<p id='quote_1' class='quotes'>${myJson[objName].quote}</p>
						<p>${myJson[objName].name}</p>`;
			quotes.innerHTML = quoteData;
			objName++;
			console.log(objName);
		}
		else if(objName > 18) {
				objName = 16;
				quoteData = quoteData = `<p id='quote_1' class='quotes'>${myJson[objName].quote}</p>
						<p>${myJson[objName].name}</p>`;
				quotes.innerHTML = quoteData;
				objName++;
			}
 	}, 10000);

 	 });
 });

