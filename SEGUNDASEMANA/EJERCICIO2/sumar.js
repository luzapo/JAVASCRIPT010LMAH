'use strict'
/* Realizar un programa que permita sumar los 150 primeros números
* 
*/

let n = 1;
let s = 0;
while (n <= 150) {
    s = s + n;
    n++;
}
console.log('Suma de 150 números: ' + s);
