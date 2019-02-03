window.addEventListener('load', () => {
	let options = ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'];
	let select = document.querySelector('#select_time');

	options.forEach(x => {
		let item = document.createElement('OPTION');
		select.appendChild(item);
		item.innerHTML += x;
	});
});