const TEMATICAS = ["Programación", "Comidas","Paises","General"];
const RECUADRO_TEMATICA = document.querySelector('.tematica');

function mostrarRecuadroTematica(){
    desactivarBotones();
    
    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.add('blur');
    }
    RECUADRO_TEMATICA.classList.remove('ocultar');

    let categoria = document.querySelectorAll(CATEGORIAS[indice1]);

    for(let i = 0; i <categoria.length; i++){
        categoria[i].classList.remove('ocultar');
    }
    let textoTematica = document.querySelector('.texto-tematica');

    textoTematica.innerText = 'Temática : ' + TEMATICAS[indice1];
}