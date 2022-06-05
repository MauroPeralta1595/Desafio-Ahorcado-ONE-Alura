const $botonVolverAlMenu2 = document.querySelector(".volver-inicio-2");

$botonVolverAlMenu2.addEventListener("click",function(){
    
    $menuPrincipal.classList.remove("ocultar");
    $menuAgregarPalabra.classList.add("ocultar");

})