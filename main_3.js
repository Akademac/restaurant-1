window.addEventListener('load', () => {
	fetch('https://akademac.github.io/JSON/testJson.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		let breakfast = document.querySelector('#breakfast_json');
		let lunch = document.querySelector('#lunch_json');
		let dinner = document.querySelector('#dinner_json');
		let sundayMenu = document.querySelector('#menu_2');
		let data;
		let data1;
		let data2;



		let date = new Date();

		let day = date.getDay();

		let displayDay = document.querySelector('#day');


		let sundayNotice = document.createElement('P');

		let sundayDiv = document.querySelector('#menu_2');

		let dayArr = new Array(7);

		dayArr[0] = 'Sunday';
		dayArr[1] = 'Monday';
		dayArr[2] = 'Tuesday';
		dayArr[3] = 'Wednesday';
		dayArr[4] = 'Thursday';
		dayArr[5] = 'Friday';
		dayArr[6] = 'Saturday';

		displayDay.innerHTML = dayArr[day];

		let x;

		if(day === 0) {

			sundayDiv.innerHTML = '';

			sundayDiv.style.height = '12rem';


			sundayDiv.appendChild(sundayNotice);
		
			sundayNotice.innerHTML = 'Come tomorrow to see menu for monday, have a nice day!'
			sundayNotice.style.fontSize = '3rem';

		}
		else{
			x = day-1;
			data = `<h4>${myJson[19].breakfast[x].name}</h4>
					<img src="${myJson[19].breakfast[x].img}" alt='Not found' />
					<p class='meal_description'>${myJson[19].breakfast[x].description}</p>
					<p>$${myJson[19].breakfast[x].price}</p>
					</div>
				</div>`;
				
				data1 = `<h4>${myJson[19].lunch[x].name}</h4>
					<img src="${myJson[19].lunch[x].img}" alt='Not found' />
					<p class='meal_description'>${myJson[19].lunch[x].description}</p>
					<p>$${myJson[19].lunch[x].price}</p>
					</div>
				</div>`;
				
				data2 = `<h4>${myJson[19].dinner[x].name}</h4>
					<img src="${myJson[19].dinner[x].img}" alt='Not found' />
					<p class='meal_description'>${myJson[19].dinner[x].description}</p>
					<p>$${myJson[19].dinner[x].price}</p>
					</div>
				</div>`;
	
		}

		breakfast.innerHTML = data;
		lunch.innerHTML = data1;
		dinner.innerHTML = data2;
	
	})
});