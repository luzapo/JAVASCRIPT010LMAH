'use strict'
/**
 * Leer n cantidad de notas de un estudiante e imprimir por pantalla
 *
 */
let i = 1;
let notaNueva = 0;
let notas = [];

let numeroNotas = parseInt(prompt('Ingrese número de notas a reportar'));

while (i <= numeroNotas) {
    let notaNueva = parseInt(prompt('Ingrese nota entre 1 y 10, Nota número ' + i + ':'));
    if (notaNueva >= 0 && notaNueva <= 10) {
        notas.push(notaNueva);  
    }
    i++;
}

alert("Notas Ingresadas:" + notas);