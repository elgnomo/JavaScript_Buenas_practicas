function Persona(nombre, sobreNombre) {
    this.nombre = nombre;
    this.sobreNombre = sobreNombre;
}

var persona = new Persona("Efrain", "elGnomo");

console.log(persona);
console.log(persona.nombre);
console.log(persona.sobreNombre);

/*
Y estas propiedades como tal pertenecen al objeto 'persona'. 
Y me aparecen de esa manera gracias a que yo agregué la palabra reservada 
'this' para poder asignárselos a ese objeto. Y, del mismo modo, me aparece 
la impresión en pantalla de cada una de las propiedades que yo decidí mostrar
de este objeto. Con esto, entonces, ya tenemos un objeto declarado e 
inicializado previamente, el cual ya podremos utilizar sin ningún problema.
*/