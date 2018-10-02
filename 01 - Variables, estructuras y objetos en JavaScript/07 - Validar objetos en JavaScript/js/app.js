var persona = {};

console.log(persona);

if (persona) {
    console.log("La persona existe");
} else {
    console.log("La persona NO existe");
}

/*
Una de las carencias que tiene JavaScript es el hecho de que no 
es un lenguaje fuertemente tipado, por lo cual a veces resulta complicado 
estar trabajando con cierto tipo de datos, incluso verificar si cierto tipo 
de dato existe o no existe. Pero para poder evitarnos en ciertos casos, 
podemos utilizar simplemente una validación muy sencilla. En este caso, 
cuando una variable existe, automáticamente cuando yo hago una pregunta sobre
esto, me va a regresar un valor de 'true' o 'false', donde el mismo lenguaje
va a inferir este valor.
*/