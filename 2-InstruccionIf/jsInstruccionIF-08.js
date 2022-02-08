/*

Damonte Alejo DIV g

ejercicio 8 instruccion IF
*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}
	if (edad >= 18  && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN