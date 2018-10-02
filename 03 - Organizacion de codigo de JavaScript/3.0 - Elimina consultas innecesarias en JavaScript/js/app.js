//window.onload = function() {
var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
    console.log("¡Hola Mundo!");
});
//}
/*
sos del dispositivo con un simple movimiento de en qué momento se 
está cargando el "script". De hecho, es una muy buena práctica que todos 
los "scripts" se carguen siempre hasta abajo, es decir, que sea lo último 
que cargue. ¿Para qué? para que nosotros ya tengamos definido todos los 
componentes de HTML con los que podamos llegar a trabajar directamente 
desde nuestro JavaScript.
*/