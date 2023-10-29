'use strict'
/**
* Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci.
* 0,1,1,2,3,5,8,13……………
 */
let i = 2;
let prim = 0;
let seg = 1;
let arreglo = [];
let numero = 0;
arreglo.push(prim);
arreglo.push(seg);
while (i < 100) {
    numero = prim + seg;
    arreglo.push(numero);
    i++;
    prim = seg;
    seg = numero;
}

console.log("100 primero números de la serif Fibonacci:" + arreglo);


