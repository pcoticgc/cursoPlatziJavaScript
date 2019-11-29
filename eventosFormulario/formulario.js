var textoEdad = document.getElementById("edad");
var boton = document.getElementById("botoncito");
var textoEdadFutura = document.getElementById("edadFutura");
boton.addEventListener("click", calcularEdad);
console.log(parseInt(textoEdad.value));




function calcularEdad()
{
  var edadF = 2080 - textoEdad.value ;
  textoEdadFutura.value = edadF;
  console.log(parseInt(textoEdad.value));
  console.log(parseInt(textoEdad.value));
}
