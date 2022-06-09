const BOTON_VOLVER_AL_MENU_2 = document.querySelector(".volver-inicio-2");

BOTON_VOLVER_AL_MENU_2.addEventListener("click",function(){
    
    MENU_PRINCIPAL.classList.remove("ocultar");
    MENU_AGREGAR_PALABRA.classList.add("ocultar");
    categoriaElegida = 3;
    BOTON_PROGRAMACION.classList.remove('seleccionado');
    BOTON_COMIDAS.classList.remove('seleccionado');
    BOTON_PAIS.classList.remove('seleccionado');
    BOTON_GENERAL.classList.remove('seleccionado');
    PALABRA_INGRESADA.value = "";
    TEXTO_INFORMATIVO.classList.remove('error');
    PALABRA_INGRESADA.classList.remove('error');
})