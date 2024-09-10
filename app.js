var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//el menú se oculta una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x <links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Creación de las barras de progreso de las habilidades
function crearBarra(id_barra){
    for( i= 0; i <=16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selecciono todas las barras generales para después manipularlas
let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let bootstrap = document.getElementById("bootstrap");
crearBarra(bootstrap);

let angular = document.getElementById("angular");
crearBarra(angular);

let java = document.getElementById("java");
crearBarra(java);

let net = document.getElementById("net");
crearBarra(net);

//Se guarda la cantidad de barras que se van a ir pintando
//Se utiliza un array. Cada posición pertenece a un elemento
//Comienzan en -1 porque no tiene ninguna barra pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1]

//Variable usada como bandera para saber si ejecuto la animación
let entro = false;

//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills>=300 && entro ==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 10, 1, intervalJavascript);
        }, 100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 12, 2, intervalBootstrap);
        }, 100);
        const intervalAngular = setInterval(function(){
            pintarBarra(angular, 8, 3, intervalAngular);
        }, 100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 9, 4, intervalJava);
        }, 100);
        const intervalNet = setInterval(function(){
            pintarBarra(net, 10, 5, intervalNet);
        }, 100);
    }
}

//Lleno una barra con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice] ++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Detecto el scroll del ratón para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}