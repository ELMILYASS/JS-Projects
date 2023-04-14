let houre = document.querySelector(".houre");
let minute = document.querySelector(".minute");
let seconde = document.querySelector(".seconde");

setInterval(() => {
	let hr = new Date().getHours();
	let mn = new Date().getMinutes();
	let sc = new Date().getSeconds();
	if (hr< 10) {
		hr = "0" + hr;
	}
	if (mn < 10) {
		mn = "0" + mn;
	}
	if (sc < 10) {
		sc = "0" + sc;
	}
	houre.innerHTML = hr;
	minute.innerHTML = mn;
    seconde.innerHTML = sc;
}, 1000);
