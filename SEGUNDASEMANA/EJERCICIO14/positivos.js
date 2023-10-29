'use strict'
/**
* Llenar un arreglo de tamaño n que se llene con números ingresados por el 
* usuario y determine cantidad de positivos y negativos
 */
let i = 1;
let positivo = 0;
let negativo = 0;
let arreglo = [];

let tamano = parseInt(prompt('Ingrese tamaño del arreglo: '));

while (i <= tamano) {
    let numero = parseInt(prompt('Ingrese numero: '));
    if (numero < 0) {
        negativo = negativo + 1;
    }
    else {
        positivo = positivo + 1;
    }
    i++;
}
alert("Cantidad de números positivos:" + positivo);
alert("Cantidad de números negativos:" + negativo);


