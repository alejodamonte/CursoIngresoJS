/*

Damonte Alejo DIV g

ejercicio 7 instruccion IF
*/
function mostrar()
{
	let edad;
	let estadoCivil

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}
}//FIN DE LA FUNCIÓN