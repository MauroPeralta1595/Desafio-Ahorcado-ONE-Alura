const CANVAS = document.querySelector("#canvas");
const AHORCADO = CANVAS.getContext("2d");


function dibujarBase(){
    AHORCADO.moveTo(20, 420);
    AHORCADO.lineTo(215,420);
    AHORCADO.strokeStyle = "#ffffff";
    AHORCADO.lineWidth = 7;
    AHORCADO.stroke();
}

function dibujarPoste(){
    AHORCADO.moveTo(80, 420);
    AHORCADO.lineTo(80,10);
    AHORCADO.stroke();
}

function dibujarContinuacionPoste(){
    AHORCADO.lineTo(255,10);
    AHORCADO.stroke();
}

function dibujarSoga(){
    AHORCADO.lineTo(255,70);
    AHORCADO.stroke();
}

function dibujarCabeza(){
    AHORCADO.beginPath();
    AHORCADO.arc(255, 105, 35, 0, 2*3.14);
    AHORCADO.lineWidth = 5;
    AHORCADO.stroke();
}

function dibujarCuerpo(){
    AHORCADO.moveTo(255,137);
    AHORCADO.lineTo(255,240);
    AHORCADO.stroke();
}

function dibujarPiernaIzq(){
    AHORCADO.lineTo(210,320);
    AHORCADO.stroke();
}

function dibujarPiernaDer(){
    AHORCADO.moveTo(255,240);
    AHORCADO.lineTo(300,320);
    AHORCADO.stroke();
}

function dibujarBrazoIzq(){
    AHORCADO.moveTo(255,155);
    AHORCADO.lineTo(210,230);
    AHORCADO.stroke();
}

function dibujarBrazoDer(){
    AHORCADO.moveTo(255,155);
    AHORCADO.lineTo(300,230);
    AHORCADO.stroke();
}


function DibujarAhorcado(){
    
    if(contadorErrores < 11){
        contadorErrores++;
    }
    
    if(contadorErrores === 1){
        dibujarBase();
    }

    if(contadorErrores === 2){
        dibujarPoste();
    }

    if(contadorErrores === 3){
        dibujarContinuacionPoste();
    }

    if(contadorErrores === 4){
        dibujarSoga();
    }

    if(contadorErrores === 5){
        dibujarCabeza();
    }

    if(contadorErrores === 6){
        dibujarCuerpo();
    }

    if(contadorErrores === 7){
        dibujarPiernaIzq();
    }

    if(contadorErrores === 8){
        dibujarPiernaDer();
    }

    if(contadorErrores === 9){
        dibujarBrazoIzq();
    }

    if(contadorErrores === 10){
        dibujarBrazoDer();
    }
}