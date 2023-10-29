'use strict'
/**
 * Leer 10 precios de productos y calcular cuánto cuestan los 10 productos.
 * vamos a utilizar la funcion prompt
 */
let i = 1;
let precioNuevo = 0;
let sumaPrecios = 0;
while (i <= 10) {
   let precioNuevo = parseInt(prompt('Ingrese precio del Producto ' + i + ':' ));
   sumaPrecios = sumaPrecios + precioNuevo;
    i++;
}
alert("El precio de los 10 productos es:" +sumaPrecios);