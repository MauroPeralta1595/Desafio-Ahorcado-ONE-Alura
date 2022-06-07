const $botonGuardarPalabra = document.querySelector(".guardar-palabra");
const $palabraIngresada = document.querySelector(".agregar-palabra");

$botonGuardarPalabra.addEventListener("click",function(){

    const caracteresNoPermitidos = /[^a-z ]/;
    let validar = caracteresNoPermitidos.test($palabraIngresada.value);

    if(!validar){
        palabrasGuardadas.push($palabraIngresada.value);

        $palabraIngresada.value = "";
    }else{
        return;
    };
})