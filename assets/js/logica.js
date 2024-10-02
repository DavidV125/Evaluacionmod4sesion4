function asignarEventos() {

  // ENTRADA
    let laTemperatura = Number(prompt("¿Cuál es la temperatura actual? Ingrese sin celsius"));
    let elTiempo = Number(prompt("¿Cuánto tiempo libre tienes en horas?"));
    let laLluvia = prompt("¿Está lloviendo? (sí/no en minúsculas)");
  
//PROCESO
    if (laTemperatura >= 12 && laTemperatura <= 30 && laLluvia === "no" && elTiempo > 1) {
     
     //SALIDA
      alert("Buen momento para organizar un picnic!!!");
    } else {
      alert("No es un buen momento para organizar un picnic =(");
    }
  
 }

 //FORM IDNEX 2

 function asignarEventos2() {

  let elNombre = document.getElementById('txtNombre').value;
  let laTemperatura = Number(document.getElementById('txtTemperatura').value);
  let elTiempo = Number(document.getElementById('txtHoras').value);
  let laLluvia = document.getElementById('txtLlueve').value;
  let elBotonEnviar = document.getElementById('btnEnviar');
  elBotonEnviar.addEventListener('click', alert);


// proceso
if (laTemperatura >= 12 && laTemperatura <= 30 && laLluvia === "no" && elTiempo > 1) {
     
    //SALIDA
    alert(elNombre + ", es buen momento para organizar un picnic!!!!!!");
  } 
  else {
      alert(elNombre + ", no es un buen momento para organizar un picnic =(=(");
  }
 
}


