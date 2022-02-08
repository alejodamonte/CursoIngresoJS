/*

Damonte Alejo DIV g

ejercicio 5 instruccion IF
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad < 13 || edad > 17)
	{
		alert("Usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN