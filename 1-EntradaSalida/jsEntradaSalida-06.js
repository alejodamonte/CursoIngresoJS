/*

Alejo Damonte DIV g

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numuno;
	var numdos;
	var resultado;
	numuno = document.getElementById("txtIdNumeroUno").value;
	numdos = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numuno) + parseInt(numdos);
	alert("Su resultado es: " + resultado); 

}

