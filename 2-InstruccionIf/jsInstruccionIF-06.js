/*

Damonte Alejo DIV g

ejercicio 6 instruccion IF
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else 
	{
		if(edad >= 13)			
		{
			alert("Usted es adolescente");
		}
		else
		{
			alert("Usted es menor");
		}
	}

}//FIN DE LA FUNCIÓN