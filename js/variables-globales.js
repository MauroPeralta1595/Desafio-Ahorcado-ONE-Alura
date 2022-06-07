const cuadroLetrasRepetidas = document.querySelector(".letras-repetidas");
const avisoLetraUsada = document.querySelector(".letra-usada");
const canvas = document.querySelector("#canvas");
const ahorcado = canvas.getContext("2d");
let activadorJuego = 0;
let palabraSecreta;
let letrasRepetidas = [];
let contadorErrores = 0;