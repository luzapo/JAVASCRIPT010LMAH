'use strict'
/* Realizar un programa que permita generar 100 números e
* imprimir solo los números pares
*/

let i = 1;
while (i <= 100) {
    if (i%2 == 0) {
        console.log('Numero Par: ' +i);
    }
    i++;
}

