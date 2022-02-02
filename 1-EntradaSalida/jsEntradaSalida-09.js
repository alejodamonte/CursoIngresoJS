/*

Alejo Damonte DIV g

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo
	var resultado
	sueldo = document.getElementById("txtIdSueldo").value;
	resultado = parseInt(sueldo) * 1.10;
	document.getElementById("txtIdResultado").value = resultado;
}
