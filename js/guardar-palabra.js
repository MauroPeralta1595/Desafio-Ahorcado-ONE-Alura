const BOTON_GUARDAR_PALABRA = document.querySelector(".guardar-palabra");
const PALABRA_INGRESADA = document.querySelector(".agregar-palabra");

BOTON_GUARDAR_PALABRA.addEventListener("click",function(){

    const CARACTERES_NO_PERMITIDOS = /[^a-z]/;
    let validar = CARACTERES_NO_PERMITIDOS.test(PALABRA_INGRESADA.value);

    if(!validar && PALABRA_INGRESADA.value != ''){
        PALABRAS_SECRETAS[categoriaElegida].push(PALABRA_INGRESADA.value);
        PALABRA_INGRESADA.value = "";
        categoriaElegida = 3;
        BOTON_PROGRAMACION.classList.remove('seleccionado');
        BOTON_COMIDAS.classList.remove('seleccionado');
        BOTON_PAIS.classList.remove('seleccionado');
        BOTON_GENERAL.classList.remove('seleccionado');
        visibilizarAviso();
    }else{
        return;
    };
})