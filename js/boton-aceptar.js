const BOTON_ACEPTAR_PERDISTE = document.querySelector('.aceptar-perdiste');
const BOTON_ACEPTAR_GANASTE = document.querySelector('.aceptar-ganaste');
const BOTON_ACEPTAR_DESISTIO = document.querySelector('.aceptar-desistio');


BOTON_ACEPTAR_PERDISTE.addEventListener("click",function(){
    
    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }
    RECUADRO_PERDIO.classList.add('ocultar');
    activarBotones();
    BOTON_DESISTIR.disabled = true;

})

BOTON_ACEPTAR_GANASTE.addEventListener("click",function(){

    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }
    RECUADRO_GANO.classList.add('ocultar');
    activarBotones();
    BOTON_DESISTIR.disabled = true;

})

BOTON_ACEPTAR_DESISTIO.addEventListener("click",function(){

    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }
    RECUADRO_DESISTIO.classList.add('ocultar');
    activarBotones ();
    BOTON_DESISTIR.disabled = true;

})