//Otra forma de declarar variables en JavaScript
const btnIzquierdo = document.querySelector(".btn-izquierdo"),
      btnDerecho = document.querySelector(".btn-derecho"),
      slider = document.querySelector("#slider"),
      //querySelectorAll para seleccionar todas las imágenes
      //Cantidad de imágenes que hay
      sliderSection = document.querySelectorAll(".slider-image");

//Cada vez que se da click en el botón derecho la funcionalidad activa el cambio de imagen 

btnIzquierdo.addEventListener("click", e => moverIzquierda());
btnDerecho.addEventListener("click", e => moverDerecha());

//Para movimiento automatico de las imágenes
setInterval(() => {
    moverDerecha()
}, 3000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;

function moverDerecha(){
    if (counter >= sliderSection.length -1){
        counter = 0; 
        operacion = 0; 
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"; 
    }else{
    counter++; 
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    }
}
function moverIzquierda(){
    counter --; 
    if (counter < 0){
        counter = sliderSection.length - 1; 
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"; 
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

//Se puede omitir el else utilizando un return 