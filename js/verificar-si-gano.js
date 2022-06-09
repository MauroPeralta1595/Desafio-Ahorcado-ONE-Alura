
function verificarSiGano(){
    let palabraVisible = '';
    let letraVisible = document.querySelectorAll(".palabra p");
    let validarguion = new RegExp ("-","g")
    for (let i = 0; i < palabraSecreta.length; i++){
        palabraVisible += letraVisible[i].innerHTML;
    }
    if (!(validarguion.test(palabraVisible))){
        mostrarRecuadroGano();
        activadorJuego = 0;
        BOTON_DESISTIR.disabled = true;
        return;
    }else{
        return;
    }
}