var estado = true,
    resultado = "";

if (estado) {
    console.log("continuar_estado")
} else {
    console.log("detenerse_estado");
}


if (resultado) {
    console.log("continuar_resultado")
} else {
    console.log("detenerse_resultado");
}

/*
Y esto es dado que JavaScript maneja estos valores de esta forma. 
Pero nosotros podemos seguir entonces contando con la validación de
expresiones booleanas directamente aquí. ¿Por qué booleano? Porque todo valor
 booleano simplemente puede tener un valor positivo o un valor negativo. 
 Y en este caso, al tener estos valores –vamos a probarlo nuevamente–,
  como el valor que tiene la propiedad de 'estado' es igual a 'true', 
  entonces me va a mostrar el valor "continuar" en pantalla. 
  Con esto entonces vamos a ahorrarnos muchos espacios al momento de estar 
  haciendo validaciones no explícitas en alguna condición.
*/