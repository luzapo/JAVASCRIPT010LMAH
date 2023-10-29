'use strict'
/**
 * Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo, 
 * imprimir los sueldos y el sueldo más bajo
 * 
 */
let i = 1;
let catidadSueldos = 0;
let sueldoBajo = 0;
let sueldo = 0;
let sueldos = [];

let cantidadSueldos = parseInt(prompt('Ingrese cantidad de sueldos a analizar: '));

while (i <= cantidadSueldos) {

    let sueldo = parseInt(prompt('Ingrese sueldo para analizarlo. Número ' + i + ':'));
    if (i == 1) {
        sueldoBajo = sueldo;
    }
    else {
        if (sueldo < sueldoBajo) {
            sueldoBajo = sueldo;
        }

    }
    sueldos.push(sueldo);
    i++;
}

alert("Sueldo más bajo:" + sueldoBajo);
alert("Suedos recibidos:" + sueldos);