function mostrarRecuadroPerdio(){
    let recuadroPerdio = document.querySelector('.perdiste')
    let footer = document.querySelector('footer');
    let header = document.querySelector('header');
    let botonesJuego = document.querySelector('.botones-juego');
    let palabra = document.querySelector('.palabra');
        setTimeout(function () {
            palabra.classList.add('blur');
            header.classList.add('blur');
            footer.classList.add('blur');
            canvas.classList.add('blur');
            cuadroLetrasRepetidas.classList.add('blur');
            botonesJuego.classList.add('blur');
            recuadroPerdio.classList.remove('ocultar');
        }, 700);
}