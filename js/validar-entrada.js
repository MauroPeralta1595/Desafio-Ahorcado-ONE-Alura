function validarEntrada(cadena) {
    const CARACTERES_NO_PERMITIDOS = /[^a-z ]/;
    return CARACTERES_NO_PERMITIDOS.test(cadena);
  }


  
  
  