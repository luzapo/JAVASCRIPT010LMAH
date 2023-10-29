'use strict'

const miArreglo = [];
for (let i = 0; i < 20; i++){
    miArreglo.push((Math.random() * (30 - 1) + 1).toFixed(0));
}

let nuevoArreglo = miArreglo.filter(element => element % 2 == 0);

console.log(miArreglo);

console.log(nuevoArreglo);