/*

Alejo Damonte DIV g

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numuno;
	var numdos;
	var resultado;
	numuno = document.getElementById("txtIdNumeroUno").value;
	numdos = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numuno) + parseInt(numdos) ;
	alert("El resultado es : " + resultado);

}

function restar()
{
	var numuno;
	var numdos;
	var resultado;
	numuno = document.getElementById("txtIdNumeroUno").value;
	numdos = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numuno) - parseInt(numdos) ;
	alert("El resultado es : " + resultado);
}

function multiplicar()
{ 
	var numuno;
	var numdos;
	var resultado;
	numuno = document.getElementById("txtIdNumeroUno").value;
	numdos = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numuno) * parseInt(numdos) ;
	alert("El resultado es : " + resultado);
}

function dividir()
{
	var numuno;
	var numdos;
	var resultado;
	numuno = document.getElementById("txtIdNumeroUno").value;
	numdos = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(numuno) / parseInt(numdos) ;
	alert("El resultado es : " + resultado);
}

