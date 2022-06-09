const AVISO_LETRA_USADA = document.querySelector(".letra-usada");
const CUADRO_LETRAS_REPETIDAS = document.querySelector(".letras-repetidas");

window.addEventListener("keydown", function (event) {
    if(activadorJuego === 0){
        return;
    }else{
        let letraIngresada = event;
        let verificarLetraIngresada = new RegExp (letraIngresada.key, 'g');
        if (!validarEntrada(letraIngresada.key)){
            if (verificarLetraIngresada.test(palabraSecreta)){
                visibilizarLetra(letraIngresada.key,verificarLetraIngresada);
                verificarSiGano();
            } else{
                if(verificarLetraIngresada.test(letrasRepetidas)){
                    AVISO_LETRA_USADA.classList.remove("aviso-invisible");
                    setTimeout(function () {
                        AVISO_LETRA_USADA.classList.add("aviso-invisible");
                    }, 1100);
                    return;

                }else{
                    DibujarAhorcado();
                    letrasRepetidas.push(letraIngresada.key);
                    CUADRO_LETRAS_REPETIDAS.innerText = letrasRepetidas.join(' ');
                    if(contadorErrores === 10){
                        for (let i = 0; i < palabraSecreta.length; i++){
                            let reemplazarletra = document.querySelector(`.posicion-${i}`);
                            reemplazarletra.innerText = palabraSecreta[i];
                            reemplazarletra.classList.replace("palabra-secreta", "palabra-secreta-visible-perdiste");
                        }
                        mostrarRecuadroPerdio();
                        BOTON_DESISTIR.disabled = true;
                        activadorJuego = 0;
                    }
                    return;
                }
            }
        }
    }
})



