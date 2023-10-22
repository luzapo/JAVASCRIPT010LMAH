'use strict'
/* DEterminar calificacion de estudiante con escala de ponderacion
* 0 y 2.9 la ponderacion es insuficiente
* 3.0 y 3.5 ponderacion regular
* 3.6 y 4 ponderacion bien
* 4.1 y 4.5 muy bien
* 4.6 y 5.0 excelente
*/

let calificacion = 3.5;
let mensaje = "";
switch (true){
    case calificacion >= 0 && calificacion <= 2.9:
         mensaje = `{insuficiente ${calificacion}`; //Template string
        break;
        case calificacion >= 3 && calificacion <= 3.5:
            mensaje = `{regular ${calificacion}`; //Template string
           break;
           case calificacion > 3.5 && calificacion <= 4.0:
            mensaje = `{Bien ${calificacion}`; //Template string
           break;
           case calificacion >= 4.1 && calificacion <= 4.5:
            mensaje = `{Muy Bien ${calificacion}`; //Template string
           break;
           case calificacion > 4.5 && calificacion <= 5.0:
            mensaje = `{Excelente ${calificacion}`; //Template string
           break;
           default:
            mensaje = `Fuera de rango la calificacion ${calificacion}`; 
}
console.log(mensaje);