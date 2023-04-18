let houre = document.querySelector(".houre");
let minute = document.querySelector(".minute");
let seconde = document.querySelector(".seconde");

setInterval(() => {
    let date = new Date();
	let hr = date.getHours();
	let mn = date.getMinutes();
	let sc = date.getSeconds();

	let chr = hr * 30 + mn / 2;
	let cmn = mn * 6 + sc / 10;
	let csc = sc * 6;
	houre.style.transform = `rotate(${chr-180}deg)`;
	minute.style.transform = `rotate(${cmn-180}deg)`;

	seconde.style.transform = `rotate(${csc-180}deg)`;
}, 1000);
