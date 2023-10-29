'use strict'
/**
 * Realizar un programa que pida la base, el exponente y se ejecute el cálculo 
* sin uso de bibliotecas
 * 
 */
let i = 1;
let resultado = 1;


let base = parseInt(prompt('Ingrese base: '));
let exponente = parseInt(prompt('Ingrese exponente: '));

while (i <= exponente) {

    resultado = resultado * base ;
    i++;    
    }

alert(+base+ "a la: " +exponente + "Igual a: " + resultado);
