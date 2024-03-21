//Funciones galería
const FullImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function abrirImagen(imagen){
    FullImgBox.style.display = "flex";
    //Accedemos al enlace src, para asiganarle el parámetro
    fulImg.src = imagen;
}
function cerrarImagen(){
    //Desaparece la ventana
    FullImgBox.style.display = "none";
}

//Función bóton de videos
//Se llama a la función cuando se desea abrir el video
//Con el getElementById se obtiene una referencia del elemento por su id
//Con classList.add('show') se añade la clase 'show' de css que permite controlar la 
//visibilidad del elemento 
function abrirVideo(){
    document.getElementById("modal-video").classList.add('show');
}

//Siguiendo la misma estructura, la única diferencia con respecto a la anterior es
//que se utiliza remove para eliminar la clase 'show' que permite mostrar el elemento a través
//de la llamada de la función
function cerrarVideo(){
    document.getElementById("modal-video").classList.remove('show');
}

