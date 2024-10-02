function asignarEventos2() {

    let elNombre = document.getElementById('txtNombre').value;
    let laTemperatura = Number(document.getElementById('txtTemperatura').value);
    let elTiempo = Number(document.getElementById('txtHoras').value);
    let laLluvia = document.getElementById('txtLlueve').value;
    let elBotonEnviar = document.getElementById('btnEnviar');
    elBotonEnviar.addEventListener('click', asignarEventos2);
  
  
  // proceso
  if (laTemperatura >= 12 && laTemperatura <= 30 && laLluvia === "no" && elTiempo > 1) {
    resultado = elNombre + ", es buen momento para organizar un picnic!!!";
} else {

    resultado = elNombre + ", no es un buen momento para organizar un picnic =( (prueba en h2)";
}

//SALIDA
document.getElementById('paseoRespuesta').textContent = resultado;
}
  
  
  