'use strict'
/**
* Llenar un arreglo de tamaño n, este tamaño debe ser impar, y el contenido 
* del arreglo deben ser los números pares partiendo de 2
 */
let i = 1;
let arreglo = [];

let tamano = parseInt(prompt('Ingrese tamaño del arreglo, número impar: '));

if (tamano % 2 == 0) {
    alert("El tamaño del arreglo debe ser impar");
}
else {
    while (i <= tamano) {
        if (i >= 2 && i % 2 == 0) {
            arreglo.push(i);
        }
        i++;
    }
    alert("Arreglo con números pares:" + arreglo);
}

