const BOTON_ACEPTAR_PERDISTE = document.querySelector('.aceptar-perdiste');
const BOTON_ACEPTAR_GANASTE = document.querySelector('.aceptar-ganaste');


BOTON_ACEPTAR_PERDISTE.addEventListener("click",function(){

    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }
    RECUADRO_PERDIO.classList.add('ocultar');
})

BOTON_ACEPTAR_GANASTE.addEventListener("click",function(){

    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }
    RECUADRO_GANO.classList.add('ocultar');
})
