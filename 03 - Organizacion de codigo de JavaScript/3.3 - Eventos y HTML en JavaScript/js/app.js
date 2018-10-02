var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
    console.log("¡Hola Mundo!");
})
/**
 * Cargo en mi navegador el ejercicio y hago clic en el botón Saludar.
 * Esto me va a mostrar en la consola el texto "¡Hola Mundo!" y,
 * si lo vuelvo a repetir varias veces, en lugar de que se imprima 
 * tantas veces yo he pulsado el botón, simplemente me va a aparecer un número
 * antes de ese texto indicándome cuántas veces he pulsado dicho botón.
 * Con esto ya tengo una relación entre un elemento de HTML y un elemento de 
 * JavaScript.
 */