const $botonVolverAlMenu = document.querySelector(".volver-inicio");

$botonVolverAlMenu.addEventListener("click",function(){
    $menuPrincipal.classList.remove("ocultar");
    $juego.classList.add("ocultar");
    canvas.width=canvas.width
    contadorErrores = 0;
    cuadroPalabraEscondida.innerHTML = '';
    cuadroLetrasRepetidas.innerText = '';
    letrasRepetidas = [];
    activadorJuego = 0;
    letrasCorrectas = [];
})