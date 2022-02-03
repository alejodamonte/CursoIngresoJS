/*

Alejo Damonte DIV g

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var valorDelDescuento;
	var resultado;
	var descuento;

	descuento = 0.25;
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	valorDelDescuento = importe * descuento ; 
	resultado = importe - valorDelDescuento;

	document.getElementById("txtIdResultado").value = resultado;
}
