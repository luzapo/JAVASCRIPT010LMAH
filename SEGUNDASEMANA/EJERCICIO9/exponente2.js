'use strict'
/**
* Realizar un programa que pida la base, el exponente y se ejecute el cálculo 
* sin uso de bibliotecas
*/
let i = 1;
let resultado = 1;

let base = parseInt(prompt('Ingrese base: '));
let exponente = parseInt(prompt('Ingrese exponente: '));

const expo = (num1, num2) => {
    while (i <= exponente) {
        resultado = resultado * base;
        i++;
    }
    return resultado;
}

alert(expo(base, exponente));
