window.addEventListener('load', () => {
	let options_time = ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'];
	
	let option_person = ['1 person', '2 persons', '3 persons', '4 person', '5 persons', '6 persons'];

	let select_p_time = document.querySelectorAll('.select_time');

	select_p_size = document.querySelectorAll('.party_size');

	select_p_time.forEach(x => {
		options_time.forEach(y => {
			let item = document.createElement('OPTION');
			x.appendChild(item);
			item.innerHTML += y;

		});
	});

	select_p_size.forEach(z => {
		option_person.forEach(w => {
			let item = document.createElement('OPTION');
			z.appendChild(item);
			item.innerHTML += w;
		});
	});

});