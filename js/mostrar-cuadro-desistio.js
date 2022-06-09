const RECUADRO_DESISTIO = document.querySelector('.desistio')
function mostrarRecuadroDesistio(){
    desactivarBotones()
    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.add('blur');
    }
    RECUADRO_DESISTIO.classList.remove('ocultar');

}