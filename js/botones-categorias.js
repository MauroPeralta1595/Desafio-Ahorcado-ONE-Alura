const BOTON_PROGRAMACION = document.querySelector('.boton-programacion');
const BOTON_COMIDAS = document.querySelector('.boton-comidas');
const BOTON_PAIS = document.querySelector('.boton-pais');
const BOTON_GENERAL = document.querySelector('.boton-general');

let categoriaElegida = 3;


BOTON_PROGRAMACION.addEventListener("click",function(){
    categoriaElegida = 0;
    BOTON_PROGRAMACION.classList.add('seleccionado');
    BOTON_COMIDAS.classList.remove('seleccionado');
    BOTON_PAIS.classList.remove('seleccionado');
    BOTON_GENERAL.classList.remove('seleccionado');
})

BOTON_COMIDAS.addEventListener("click",function(){
    categoriaElegida = 1;
    BOTON_COMIDAS.classList.add('seleccionado');
    BOTON_PROGRAMACION.classList.remove('seleccionado');
    BOTON_PAIS.classList.remove('seleccionado');
    BOTON_GENERAL.classList.remove('seleccionado');
})


BOTON_PAIS.addEventListener("click",function(){
    categoriaElegida = 2;
    BOTON_PAIS.classList.add('seleccionado');
    BOTON_PROGRAMACION.classList.remove('seleccionado');
    BOTON_COMIDAS.classList.remove('seleccionado');
    BOTON_GENERAL.classList.remove('seleccionado');
})


BOTON_GENERAL.addEventListener("click",function(){
    categoriaElegida = 3;
    BOTON_GENERAL.classList.add('seleccionado');
    BOTON_PROGRAMACION.classList.remove('seleccionado');
    BOTON_PAIS.classList.remove('seleccionado');
    BOTON_COMIDAS.classList.remove('seleccionado');
})