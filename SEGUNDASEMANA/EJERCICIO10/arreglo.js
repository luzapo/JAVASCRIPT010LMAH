'use strict'
/**
 * Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado e 
 * imprimir por consola
 * 
 */
let i = 1;

let arreglo = [];
let num = 1;

let tamano = parseInt(prompt('Ingrese tamaño del arreglo: '));


while (i <= tamano) {
    arreglo.push(num);
    if (num == 1) {
        num = 0;
    }
    else {
        num = 1;
    }
        i++;
}



alert(arreglo);
