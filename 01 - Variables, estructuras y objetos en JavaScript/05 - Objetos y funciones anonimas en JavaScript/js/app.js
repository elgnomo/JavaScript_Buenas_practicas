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


console.log(tienda.nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
    alert("Hola");
    console.log(tienda.saludar());
});

/*
    Y a partir de esto, voy a escuchar cuando alguien le haga clic. 
    En el momento en el que alguien haga clic sobre ese botón, 
    se va a ejecutar el contenido de esta función anónima, 
    que está declarado dentro del método del 'addEventListener'. 
    Pero simplemente estamos invocando el método de este objeto. 
    A partir de esto, entonces escribir el código de esta forma me va a 
    permitir a mí invocarlo, sin tener que estar redeclarando alguna función
    y hacer un uso excesivo de funciones anónimas.
*/