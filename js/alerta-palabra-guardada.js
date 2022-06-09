const ALERTA_PALABRA_GUARDADA = document.querySelector('.texto-emergente');

function visibilizarAviso(){
    ALERTA_PALABRA_GUARDADA.classList.add("visible");
    setTimeout(function () {
        ALERTA_PALABRA_GUARDADA.classList.remove("visible");
    }, 1500);
}