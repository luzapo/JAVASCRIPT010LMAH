'use strict'
/**
* Llenar un arreglo con los primeros 100 números pares y muestre la suma de 
* los elementos del arreglo
 */
let i = 0;
let arreglo = [];
let numero = 2;
let total = 0;
while (i < 100) {

    if (numero % 2 == 0) {
        arreglo.push(numero);
        total = total + numero;
        i++;
    }
    numero = numero + 2;
}
console.log("Suma de los pares: " + total);
console.log(arreglo);
