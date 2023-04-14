var ingredients = [
	{
		Name: "BEEF",
		width: "210px",
		height: "30px",
		url: "url('images/burger/meat.png')",
	},
	{
		Name: "ONION",
		width: "300px",
		height: "15px",
		url: "url('images/burger/onion.png')",
	},
	{
		Name: "COURGETTE",
		width: "230px",
		height: "15px",
		url: "url('images/burger/courgette.png')",
	},
	{
		Name: "CHEESE",
		width: "270px",
		height: "10px",
		url: "url('images/burger/cheese.png')",
	},
	{
		Name: "PEAS",
		width: "200px",
		height: "9px",
		url: "url('images/burger/peas.png')",
	},
	{
		Name: "SAUCE",
		width: "260px",
		height: "15px",
		url: "url('images/burger/sauce.png')",
	},
];

for (var i = 0; i < ingredients.length; i++) {
	const ing = ingredients[i];

	var button = document.getElementsByClassName(ing["Name"]);

	button[0].addEventListener("click", function () {
		var li = document.createElement("li");
		li.style.width = ing["width"];
		li.style.height = ing["height"];
		li.style.backgroundImage = ing["url"];
		li.style.backgroundSize = "300px";
		li.style.backgroundPosition = "center";
		li.style.order = "2";
		li.style.borderRadius = "10px";
		li.className = ing["Name"] + "item";

		document.getElementById("UL").appendChild(li);
	});
	button[1].addEventListener("click", function () {
		var ingr = document.getElementsByClassName(ing["Name"] + "item");
		if (ingr.length > 0) {
			const liste = document.getElementById("UL").removeChild(ingr[0]);
		}
	});
}
