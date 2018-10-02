var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);

function suma(datoA, datoB) {
    var resultado = datoA + datoB;
    return resultado;
}

suma(2, 3);

var cuentaFinal = suma(suma(2, 3), suma(20, 45));

//suma(5, 65)
console.log(cuentaFinal)
/**
 * En muchas ocasiones, en nuestro código, 
 * nos daremos cuenta de que estamos utilizando muchas instrucciones repetidas.
 * Cuando caigamos en esta situación, es momento de trabajar con funciones, 
 * es decir, encapsular todas estas acciones en un solo objeto que yo pueda 
 * estar reutilizando después. Por ejemplo, en este caso yo estoy invocando 
 * regularmente una operación de suma, con lo cual entonces se me facilita a 
 * mí más crear una función 'suma' que reciba un par de parámetros, 
 * por ejemplo, 'datoA' y 'datoB', y que adentro se genere un cálculo.
 */