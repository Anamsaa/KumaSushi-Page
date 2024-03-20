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
const btn = document.querySelector("btn_video");
const videoContainer = document.querySelector("video-container");

const close = document.querySelector(".close");

    btn.addEventListener('click', ()=>{
        videoContainer.classList.add("show");
    })

    close.addEventListener('click', ()=>{
        videoContainer.classList.remove("show");
    })

