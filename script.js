var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setRandomColors() {
	var genHex1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var genHex2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ genHex1
	+ ", " 
	+ genHex2
	+ ")";
	color1.value = genHex1;
	color2.value = genHex2;
	css.textContent = body.style.background + ";";
}

// window.onload=function(){
// 	const generateImage = () => {
// 	  const direction = Math.round(Math.random() * 360); //To output a volue between 0 and 360 in degrees to be given to the linear-gradient.

// 	  const r1 = Math.round(Math.random() * 255); // Math.random() outputs a numer between 0(inclusive) & 1(exclusive) with around 17 decimal digits.
// 	  const g1 = Math.round(Math.random() * 255); // We take this number and multiply it by 255. This number can never go above 255.
// 	  const b1 = Math.round(Math.random() * 255); // We have a decimal number with we make an integer with Math.round() which rounds off the previous output.
// 	  // to add random transparency to the image;         // This output is a whole number between 0 & 255 and can be assigned as values for the rgba() property.
// 	  const a1 = Math.round(Math.random() * 10) / 10; //  *** for alpha values we need between 0 & 1 so we multiply the random number with 10 so as to get a value X.xxxxx, round it off so as to X and then                                                                divide it by 10 to get a decimal number or 1. ***  //

// 	  const r2 = Math.round(Math.random() * 255);
// 	  const g2 = Math.round(Math.random() * 255);
	  
// 	  const b2 = Math.round(Math.random() * 255);
// 	  // to add random transparency to the image;
// 	  const a2 = Math.round(Math.random() * 10) / 10;

// 	  const background = body.style.background = "linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))";
// 	  //Displaying the passing values.
// 	  button.textContent = "${background};";
// 	}
// }

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomColors);