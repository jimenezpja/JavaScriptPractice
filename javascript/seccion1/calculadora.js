var tipooperacion = prompt("Eliga el tipo de operacion que desea realizar: 1-sumar || 2-restar || 3-multiplicar || 4-dividir");
var numero1 = Number (prompt('Ingrese el Numero'));
var numero2 = Number (prompt('Ingrese el Numero'));
var total;

if (tipooperacion == 1) {
  total = numero1+numero2
  alert ("El resultado de la suma es de " +total)
} else if(tipooperacion == 2){
  total= numero1-numero2
  alert("El resultado de la resta es " +total)
}  else if(tipooperacion == 3){
  total= numero1*numero2
  alert("El resultado de la multiplicacion es " +total)
}  else if(tipooperacion == 4){
  total= numero1/numero2
  alert("El resultado de la division es " +total)
}  else {
  alert("Tipo de Operacion Incorrecta")
}