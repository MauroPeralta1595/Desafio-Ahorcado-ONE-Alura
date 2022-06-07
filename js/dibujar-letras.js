const CUADRO_PALABRA_ESCONDIDA = document.querySelector(".palabra-escondida");

function elegirPalabra(){
    indice1 = Math.round(Math.random()*3);
    indice2 = Math.round(Math.random()*(PALABRAS_SECRETAS[indice1].length-1));
    return PALABRAS_SECRETAS[indice1][indice2]
}

function dibujarLetras(){
    let posicion = 0;
    for (let i = 0; i<palabraSecreta.length; i++){
        let letra = document.createElement("p","readonly"); 
        letra.classList.add("palabra-secreta");
        letra.classList.add(`posicion-${posicion}`);
        letra.innerText = "-";
        CUADRO_PALABRA_ESCONDIDA.appendChild(letra);
        posicion++;
    }
}

