'use strict'
/* algoritmo que convierta litros en centilitros, decilitros, galones y onzas
* litros a centilitros *100
* litroa a decilitros *10
* litros a galones * 3.785
* litros a onzs * 33.814
*/

let litros = 3.5;
let mensaje = "";
let centilitros = litros * 100;
let decilitros = litros * 10;
let galones = litros / 3.785;
let onzas = litros * 33.814;

console.log(+litros + " Litros, equivalen a: "+ centilitros + " centilitros");
console.log(+litros + " Litros, equivalen a: "+ decilitros + " decilitros");
console.log(+litros + " Litros, equivalen a: "+ galones + " galones");
console.log(+litros + " Litros, equivalen a: "+ onzas + " onzas");