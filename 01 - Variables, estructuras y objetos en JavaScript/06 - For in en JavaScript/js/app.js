var persona = {
    nombre: "Efrain",
    email: "efrainantonio@ideashappy.com",
    facebook: "GNOMEDREAD",
    saludar: function () {
        return "Hola mundo"
    }
}

var dato = "";

for (dato in persona) {
    console.log(dato, persona[dato]);
}