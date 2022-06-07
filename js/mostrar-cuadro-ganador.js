function mostrarRecuadroGano(){
    setTimeout(function () {
        for (let i = 0; i<SECCIONES_BLUR.length ; i++){
            SECCIONES_BLUR[i].classList.add('blur');
        }
        RECUADRO_GANO.classList.remove('ocultar');
    }, 700);
}