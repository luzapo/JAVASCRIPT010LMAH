'use strict'

let cedinsi = "Cedinsi";
const saludo = function (msg){
console.log("Hola Mundo " +msg);
}
function saludar(callback,msg){
    callback(msg);
}
saludar(saludo, cedinsi);