//"Calculoes Innecesarios"
/*
yo estoy haciendo una iteración sobre el arreglo 'animales'. 
Aquí, cuando yo hago el cálculo, simplemente escribo el nombre de 
la variable y escribo la propiedad 'length', lo que quiere decir que, 
con cada iteración, está preguntando cuánto mide la variable animales.

Evito pidiendo solo una ocasion var totalAnimales = animales.length;

*/

var animales = ["perro", "gato", "pez"];

var totalAnimales = animales.length;

for (var i = 0; i < totalAnimales; i++) {
    console.log(animales[i]);
}

/*
    for (var i = 0; i < animales.lengt; i++) {
        console.log(animales[i]);
    }
*/