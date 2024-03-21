
//Las funciones alteran la visibildad de cada una de las secciones de la carta 
//Verfica el estado del elemento recuperado por el document.getElementById

//Si el valor de display es "none" (es decir, si el elemento está oculto), 
//la función cambia su estilo para mostrar el elemento estableciendo display a "grid"

//Si el valor de display no es "none", lo que significa que el elemento ya está visible, 
//la función cambia su estilo para ocultar el elemento estableciendo display a "none" 
function ocultarEntrantes(){
    var ocuEntrantes = document.getElementById("wrap-entrantes");
    if(ocuEntrantes.style.display == "none"){
        ocuEntrantes.style.display = "grid";
    }
    else{
        ocuEntrantes.style.display = "none"; 
    }
}

function ocultarNigiri(){
    var ocuNigiri = document.getElementById("wrap-nigiri");
    if(ocuNigiri.style.display == "none"){
        ocuNigiri.style.display = "grid";
    }
    else{
        ocuNigiri.style.display = "none"; 
    }
}

function ocultarSashimi(){
    var ocuSashimi = document.getElementById("wrap-sashimi");
    if(ocuSashimi.style.display == "none"){
        ocuSashimi.style.display = "grid";
    }
    else{
        ocuSashimi.style.display = "none";
    }
}

function ocultarMakis(){
    var ocuMakis = document.getElementById("wrap-makis");
    if(ocuMakis.style.display == "none"){
        ocuMakis.style.display = "grid";
    }
    else{
        ocuMakis.style.display = "none";
    }
}

function ocultarPlatos(){
    var ocuPlatos = document.getElementById("wrap-platos-calientes");
    if(ocuPlatos.style.display == "none"){
        ocuPlatos.style.display = "grid";
    }
    else{
        ocuPlatos.style.display = "none";
    }
}

function ocultarPostres(){
    var ocuPostres = document.getElementById("wrap-postres");
    if(ocuPostres.style.display == "none"){
        ocuPostres.style.display = "grid";
    }
    else{
        ocuPostres.style.display = "none";
    }
}

function ocultarBebidas(){
    var ocuBebidas = document.getElementById("wrap-bebidas");
    if(ocuBebidas.style.display == "none"){
        ocuBebidas.style.display = "grid";
    }
    else{
        ocuBebidas.style.display = "none";
    }
}