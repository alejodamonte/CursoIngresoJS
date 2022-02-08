/*

Damonte Alejo DIV g

ejercicio 10 instruccion IF
*/
function mostrar()
{
	let nota;

	nota = Math.floor(Math.random()*10);

	if(nota >= 9)
	{
		alert(nota + " EXELENTE");
	}
	else
	{
		if(nota > 4)
		{
			alert(nota + " APROBO");
		}
		else
		{
			alert( nota + " Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN