let result = document.querySelector(".result");
let warning = document.querySelector(".warning");
let span = document.querySelector(".result span");
let container = document.querySelector(".container");
window.addEventListener("click", (event) => {
	result.style.opacity = 1;
	warning.style.opacity = 0;
	span.style.opacity = 0;
	let target = event.target;
	let value = result.innerHTML;
	if (target.classList.contains("equal")) {
		try {
			let finalvalue = eval(value);
			if (!Number.isInteger(finalvalue)) {
				finalvalue.toFixed(2);
			}

			value = finalvalue;
		} catch {
			warning.style.opacity = 1;
		}
	} else if (target.classList.contains("del")) {
		value = value.slice(0, value.length - 1);
	} else if (target.classList.contains("ac")) {
		value = "";
		span.style.opacity = 1;
		result.innerHTML = span;
		result.style.opacity = 0;
	} else {
		if (target.classList.contains("op")) {
			value += `${target.innerHTML}`;
		}
	}
	result.innerHTML = value;
});
