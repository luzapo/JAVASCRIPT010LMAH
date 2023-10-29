'use strict'
/**
 * Leer n cantidad números y determinar cantidad de impares, imprimir 
 * cantidad de impares
 * 
 */
let i = 1;
let catidadNumeros = 0;
let numeroImpar = 0;

let cantidadNumeros = parseInt(prompt('Ingrese cantidad de números a analizar: '));

while (i <= cantidadNumeros) {

    let numero = parseInt(prompt('Ingrese numero para analizarlo. Número ' + i + ':'));
    if (numero % 2 !== 0) {
        numeroImpar = numeroImpar + 1;
    }
    i++;
}
alert("Cantidad de números impares recibidos:" + numeroImpar);
