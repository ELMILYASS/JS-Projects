let button = document.querySelector("button");
			let body = document.body;
			console.log(button);
			button.addEventListener("click", () => {
				body.style.backgroundColor = `rgb(${Math.floor(
					Math.random() * 256
				)},${Math.floor(Math.random() * 256)},${Math.floor(
					Math.random() * 256
				)})`;
			});