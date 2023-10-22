'use strict'
/*  convierta grados centígrados en Fahrenheit y viceversa.
*  para pasar a centigrados:  centigrados = ((grados-32)/1.8);
* para pasar a farenheit   farenheit = (grados*1.8)+32;
*/

//vamos a utilizar la funcion pronmt
let grados = parseFloat(prompt('Ingrese el número de grados'));
let tipoTemperatura = prompt('Ingrese C para convertir a Centigreados o F para convertir a Farenheit');

let centigrados;
let farenheit;

switch (tipoTemperatura){
    case 'C':
        centigrados = ((grados-32)/1.8);
        alert(+grados+ " equivale a: " +centigrados+ " grados Centigrados");
        break;
    case 'F':
        farenheit = (grados*1.8)+32;
        alert(+grados+ " equivale a: " +farenheit+ " grados Farenheit");
        break;
    default:
        alert('Opcion debe ser C ó F');
         
}30