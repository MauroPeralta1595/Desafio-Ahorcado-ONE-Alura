const BOTON_VOLVER_AL_MENU_2 = document.querySelector(".volver-inicio-2");

BOTON_VOLVER_AL_MENU_2.addEventListener("click",function(){
    
    MENU_PRINCIPAL.classList.remove("ocultar");
    MENU_AGREGAR_PALABRA.classList.add("ocultar");

})