function visibilizarError (elemento,textoEscrito,clase){
    if(validarEntrada(textoEscrito)){
        elemento.classList.add(clase);
    }else{
        elemento.classList.remove(clase);
    }
}

const TEXTO_INFORMATIVO = document.querySelector('.max-caracteres');

PALABRA_INGRESADA.addEventListener('input', function(){
if(this.value.length >= 0){
    visibilizarError(this, this.value , 'error');
    visibilizarError(TEXTO_INFORMATIVO,this.value,'error');

}
});
