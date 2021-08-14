
var nav4 = window.Event ? true : false;
document.createElement('tel');


// Agregar el listener al botón
function Descargar() {
  window.scrollTo(0,0);   
const $boton = document.querySelector("#btnCapturar2"), // El botón que desencadena
$objetivo = document.body; // A qué le tomamos la fotocanvas
  const opciones = {
    ignoreElements: elemento => {
      // Una función que ignora elementos. Regresa true si quieres que
      // el elemento se ignore, y false en caso contrario
      const tipo = elemento.nodeName.toLowerCase();
      // Si es imagen o encabezado h1, ignorar
      if (tipo === "nav" || tipo === "section" || tipo === "button") {
        return true;
      }
      // Para todo lo demás, no ignorar
      return false
    }
  };
  html2canvas($objetivo, opciones) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
      // Cuando se resuelva la promesa traerá el canvas
      // Crear un elemento <a>
      let enlace = document.createElement('a');
      enlace.download = "Captura de página web - Parzibyte.me.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
}

function acceptNum(evt){ 
// NOTE: Backspace = 8, Enter = 13, '0' = 48, '9' = 57 
var key = nav4 ? evt.which : evt.keyCode; 
return (key <= 13 || (key >= 48 && key <= 57) || key ==46);
}

function datamovil() {
    // Obtener la referencia del elemento body
    var valor =parseFloat( document.getElementById("valor").value);
    var  factor = [2.71,4.79,6.89,9.02,13.37,17.82];
    var meses = [3,6,9,12,18,24];


if(isNaN(valor)){
  return 'Not a Number!';
}else{

  for(var i =0; i < 6; i++ ){
    var cuota = calcular(valor,factor[i],meses[i]);
    var objetivo = document.getElementById(i);
      objetivo.innerHTML = cuota.toFixed(2);
  }
  
    var comision = calcular2(valor,factor);
    var objetivo2 = document.getElementById('valoringresar');
    objetivo2.innerHTML = comision.toFixed(2);
  
    var comision = calcular2(valor,factor);
    var objetivo2 = document.getElementById('DataLink');
    objetivo2.innerHTML = comision.toFixed(2);

    var celda = document.getElementById('efectivo');
    celda.innerHTML = valor;

}

  }

  function datalink() {
    // Obtener la referencia del elemento body
    var valor =parseFloat( document.getElementById("valor").value);
    var  factor = [2.71,4.79,6.89,9.02,13.37,17.82];
    var meses = [3,6,9,12,18,24];

if(isNaN(valor)){
  return 'Not a Number!';
}else{
   
for(var i =0; i < 6; i++ ){
  var cuota = calcular(valor,factor[i],meses[i]);
  var objetivo = document.getElementById(i);
    objetivo.innerHTML = cuota.toFixed(2);
}

  var comision = calcular2(valor,factor);
  var objetivo2 = document.getElementById('valoringresar');
  objetivo2.innerHTML = comision.toFixed(2);

  var datalink = calcular3(valor,factor);
  var objetivo3 = document.getElementById('DataLink');
  objetivo3.innerHTML = datalink.toFixed(2);

  }
}

  
  function calcular(valor,factor,mes){
    var  iva = valor * 0.12;
    var ivalor = iva + valor;
    var comision = ivalor * 1.06;
    var interes = (comision * factor)/ 100;
    var total = comision + interes;
    return total / mes;
  }

  function calcular2(valor,factor){
    var  iva = valor * 0.12;
    var ivalor = iva + valor;
    return ivalor * 1.06; 
  }

  function calcular3(valor,factor){
    var  iva = valor * 0.12;
    var ivalor = iva + valor;
    var comision= ivalor * 1.06;
    return comision / 1.12; 
  }