var mensaje = "mensaje local";
resultado += 2;

var datos = {};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar() {
	console.log(mensaje);
	console.log(resultado);

	console.log(datos.mensaje);
	console.log(datos.resultado);
}

saludar();
/*
Debo ser muy precavido al utilizarlo. 
Este tipo de riesgo de colisiones en los nombres de variables 
que yo estoy utilizando, voy a poder compensarlo o solucionarlo 
utilizando un objeto donde yo defina los datos como propiedades o 
como métodos, según necesite, que vaya a utilizar. 
Por ejemplo, en este caso, estoy creando un objeto llamado 'datos' 
con dos propiedades. Y aquí voy a mandarlas a la consola, 
donde, al actualizar el "browser", ya tengo otros datos.
Si empezamos a trabajar con este tipo de objetos, vamos a reducir en gran 
medida este riesgo de problemas con las variables globales.
*/