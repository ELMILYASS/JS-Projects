

let input = document.querySelector(".addtask input");
let tasks = document.querySelector(".tasks");
let button = document.querySelector(".addtask button");

button.addEventListener("click", () => {
	if (input.value.length != 0) {
		tasks.innerHTML =
			tasks.innerHTML +
			`
        <div class="task">
					<p class="par">${input.value.trim()}</p>
					<i class="fas fa-trash"></i>
				</div>
        
        `;
		
	}
	
});

window.addEventListener("click", (event) => {
	let el = event.target;
	if (el.className == "fas fa-trash") {
		el.parentElement.remove();
	}
	if (el.classList.contains("par")) {
		console.log(el);
		el.classList.toggle("completed");
	}
});

