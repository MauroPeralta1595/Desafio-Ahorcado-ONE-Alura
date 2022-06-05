let canvas = document.querySelector("#canvas");
let ahorcado = canvas.getContext("2d");
let contadorErrores = 0;


function dibujarBase(){
    ahorcado.moveTo(20, 420);
    ahorcado.lineTo(215,420);
    ahorcado.strokeStyle = "#ffffff";
    ahorcado.lineWidth = 7;
    ahorcado.stroke();
}


function dibujarPoste(){
    ahorcado.moveTo(80, 420);
    ahorcado.lineTo(80,10);
    ahorcado.stroke();
}

function dibujarContinuacionPoste(){
    ahorcado.lineTo(255,10);
    ahorcado.stroke();
}

function dibujarSoga(){
    ahorcado.lineTo(255,70);
    ahorcado.stroke();
}

function dibujarCabeza(){
    ahorcado.beginPath();
    ahorcado.arc(255, 105, 35, 0, 2*3.14);
    ahorcado.lineWidth = 5;
    ahorcado.stroke();
}

function dibujarCuerpo(){
    ahorcado.moveTo(255,137);
    ahorcado.lineTo(255,240);
    ahorcado.stroke();
}

function dibujarPiernaIzq(){
    ahorcado.lineTo(210,320);
    ahorcado.stroke();
}

function dibujarPiernaDer(){
    ahorcado.moveTo(255,240);
    ahorcado.lineTo(300,320);
    ahorcado.stroke();
}

function dibujarBrazoIzq(){
    ahorcado.moveTo(255,155);
    ahorcado.lineTo(210,230);
    ahorcado.stroke();
}

function dibujarBrazoDer(){
    ahorcado.moveTo(255,155);
    ahorcado.lineTo(300,230);
    ahorcado.stroke();
}

function DibujarAhorcado()
{
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