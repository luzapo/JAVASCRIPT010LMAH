'use strict'
/**
 * Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
 * dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5
 */
let i = 1;
let notaNueva = 0;
let notasReprobadas = 0;
let notasAprobadas = 0;
while (i <= 12) {

    let notaNueva = parseInt(prompt('Ingrese nota entre 0 y 10.  Nota ' + i + ':'));
    if (notaNueva >= 0 && notaNueva <= 5) {
        notasReprobadas = notasReprobadas + 1;
    }
    else {
        if (notaNueva > 5 && notaNueva <= 10) {
            notasAprobadas = notasAprobadas + 1;
        }
    }
    i++;
}
alert("Notas Aprobadas:" + notasAprobadas);
alert("Notas Reprobadas:" + notasReprobadas);