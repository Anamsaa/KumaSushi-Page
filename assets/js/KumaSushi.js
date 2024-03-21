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

function abrirVideo(){
    document.getElementById("modal-video").classList.add('show');
}

function cerrarVideo(){
    document.getElementById("modal-video").classList.remove('show');
}

