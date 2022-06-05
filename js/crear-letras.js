cuadroPalabraEscondida = document.querySelector(".palabra-escondida");

function elegirPalabra(){
    let indice1 = Math.round(Math.random()*2);
    let indice2 = Math.round(Math.random()* palabrasSecretas[indice1].length);
    return palabrasSecretas[indice1][indice2]
}

function dibujarLetras(){
    let posicion = 0;
    for (let i = 0; i<palabraSecreta.length; i++){
        letra = document.createElement("p","readonly"); 
        letra.classList.add("palabra-secreta");
        letra.classList.add(`posicion-${posicion}`);
        letra.innerText = "-";
        cuadroPalabraEscondida.appendChild(letra);
        posicion++;
    }
}

