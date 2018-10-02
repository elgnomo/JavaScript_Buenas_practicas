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

/**
 * También cuenta con una versión instalable, 
 * la cual vas a poder descargar instalar en tu equipo para que, 
 * cada vez que estés desarrollando, o si estás en un proceso automatizado de 
 * publicación, pueda estar generando una ejecución de JSHint 
 * dentro de tu código. Si requieres configurar JSHint, 
 * simplemente pulsas este botón en que dice Configure en la parte superior,
 * casi a mitad de la pantalla, y eliges las opciones que quieras que te 
 * reporte o que quieres que te esté notificando tu servicio.
 */