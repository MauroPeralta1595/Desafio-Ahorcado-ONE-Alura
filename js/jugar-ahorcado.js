
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
                        mostrarRecuadroPerdio();
                        activadorJuego = 0;
                    }
                    return;
                }
            }
        }
    }
})



