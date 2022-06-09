
const BOTONES_DESACTIVAR = [BOTON_DESISTIR, BOTON_NUEVO_JUEGO, BOTON_VOLVER_AL_MENU];


function desactivarBotones(){
    for (let i = 0; i < BOTONES_DESACTIVAR.length; i++){
        BOTONES_DESACTIVAR[i].disabled = true;
    }
}

function activarBotones (){
    for (let i = 0; i<BOTONES_DESACTIVAR.length; i++){
        BOTONES_DESACTIVAR[i].disabled = false;
    }
}