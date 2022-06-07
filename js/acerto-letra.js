let letrasCorrectas = [];

function visibilizarLetra(letraIngresada,regex) {
    if(regex.test(letrasCorrectas)){
        return;
    }else{
        for (let i = 0; i < palabraSecreta.length; i++){
            if (letraIngresada === palabraSecreta[i]){
                let reemplazarletra = document.querySelector(`.posicion-${i}`);
                reemplazarletra.innerText = letraIngresada;
                reemplazarletra.classList.replace("palabra-secreta", "palabra-secreta-visible");
                letrasCorrectas.push(letraIngresada);
            }
        }
    }
}
