const RECUADRO_PERDIO = document.querySelector('.perdiste');

function mostrarRecuadroPerdio(){
    desactivarBotones()
    
    setTimeout(function () {
        for (let i = 0; i<SECCIONES_BLUR.length ; i++){
            SECCIONES_BLUR[i].classList.add('blur');
        }
        RECUADRO_PERDIO.classList.remove('ocultar');
    }, 200);
}