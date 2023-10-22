'use strict'
// condicional simple
let numero = 201;

if(numero %2 ===0){
    if(numero <= 100){
        console.log("el número: " +numero+"es par y es menor o igual a 100" );
    }
} else{
    if((numero > 100) && (numero < 200)){
        console.log("el número: " +numero +" es impary es mayor que 100 y menor que 200" );
    }else{
        console.log("El numero es impar: " + numero+ "es mayor o igual que 200");

    }


}
