/*

Alejo Damonte DIV g

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numeroUno
    let numeroDos
    let numeroTres
    let resultado

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    numeroTres = parseInt(numeroTres);
    resultado = numeroUno + numeroDos + numeroTres;

    alert("La suma es " + resultado);
}
function Promedio () 
{
	let numeroUno
    let numeroDos
    let numeroTres
    let sumaPromedio
    let resultado

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    numeroTres = parseInt(numeroTres);
    sumaPromedio = numeroUno + numeroDos + numeroTres;
    resultado = sumaPromedio / 3;

    alert("El promedio es " + resultado);
}
function PrecioFinal () 
{
	let numeroUno
    let numeroDos
    let numeroTres
    let total
    let totalIva
    let resultado
    let iva

    iva = 0.21;
    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    numeroTres = parseInt(numeroTres);
    total = numeroUno + numeroDos + numeroTres;
    totalIva = total * iva;
    resultado = total + totalIva;

    alert("El resultado es " + resultado);
    alert("alejo se la come")
}