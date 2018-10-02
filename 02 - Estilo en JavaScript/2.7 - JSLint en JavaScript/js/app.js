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
JSLint es un servicio que me va a permitir a mí validar mi código contra 
reglas establecidas y poder así generar un código limpio. Veamos como 
funciona. en este caso yo tengo un código de JavaScript, lo voy a pegar 
directamente en este campo de texto y voy a pulsar el botón JSLint. 
Esto va a correr ciertas reglas que están cargadas en la aplicación y me va
 a indicar cosas que yo debería estar haciendo. Por ejemplo, me indica que 
 hay un espacio que está esperando entre la declaración de la función y un 
 paréntesis, y esto me aparece en la función 'calcular'.
*/