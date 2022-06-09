const BOTON_DESISTIR = document.querySelector(".desistir");

BOTON_DESISTIR.addEventListener("click",function(){
    mostrarRecuadroDesistio();
    for (let i = 0; i < palabraSecreta.length; i++){
        let reemplazarletra = document.querySelector(`.posicion-${i}`);
        reemplazarletra.innerText = palabraSecreta[i];
        reemplazarletra.classList.replace("palabra-secreta", "palabra-secreta-visible-perdiste");
    }
    activadorJuego = 0;
    while (contadorErrores <11){
        DibujarAhorcado();
    }
    BOTON_DESISTIR.disabled = true;
})