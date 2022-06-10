const botonIrArriba = document.querySelector("#botonIrArriba");

botonIrArriba.addEventListener("click", function(){
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrConocenos = document.querySelector("#botonIrConocenos");

botonIrConocenos.addEventListener("click", function(){
	window.scrollTo({
		top:600,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrProyectos = document.querySelector("#botonIrProyectos");

botonIrProyectos.addEventListener("click", function(){
	window.scrollTo({
		top:2040,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrContactos = document.querySelector("#botonIrContactos");

botonIrContactos.addEventListener("click", function(){
	window.scrollTo({
		top:2800,
		left:0,
		behavior: "smooth"

	})		
});

//const botonRecargar = document.querySelector("#botonRecargar");
//botonRecargar.addEventListener("click", function(){
//	window.location.reload();
//
//});