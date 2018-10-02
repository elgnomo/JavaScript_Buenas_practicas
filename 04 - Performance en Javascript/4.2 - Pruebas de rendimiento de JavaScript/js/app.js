console.time('revisión')

var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión');

/**
 * Aunque es recomendable que puedas dividirlo por bloques de acción 
 * dependiendo de los objetivos de tu aplicación y hagas esta prueba de 
 * "performance" acorde a cada acción que vaya a estar realizando tu 
 * aplicación web.
 */