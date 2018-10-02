var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function (costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function () {
        var mensaje = "Hola ";
        return mensaje;
    }
};

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
    console.log(tienda.saludar());
});

/*
Es decir, parámetro uno, que en este caso es 'nombre', coma, parámetro dos, 
que es una función 'calcular', coma, parámetro tres, que es una función 
llamada 'saludar'. Pero cuando tú ejecutas una instrucción que se va a estar 
ejecutando expresamente, utilizamos el símbolo de punto y coma. Ahora, 
JavaScript no exige que escribas el punto y coma. Tu aplicación puede 
funcionar tengas o no tengas el punto y coma. Pero es una buena práctica 
para este lenguaje de programación que escribas siempre el punto y coma para
 que sepas en qué momento está terminando de ejecutarse una sentencia.
*/