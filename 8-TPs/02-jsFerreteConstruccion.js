/*

Alejo Damonte DIV g

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoDelTerreno;
    let anchoDelTerreno;
    let perimetroDelRectangulo;
    let resultado;
    
    largoDelTerreno = document.getElementById("txtIdLargo").value;
    anchoDelTerreno = document.getElementById("txtIdAncho").value;
    
    largoDelTerreno = parseFloat(largoDelTerreno);
    anchoDelTerreno = parseFloat(anchoDelTerreno);

    perimetroDelRectangulo = 2 * (largoDelTerreno + anchoDelTerreno);
    resultado = perimetroDelRectangulo * 3;

    alert("Necesita " + resultado + "m de alambre");
}
function Circulo () 
{
	let radioDelTerreno;
    let perimetroDelCirculo;
    let resultado;

    radioDelTerreno = document.getElementById("txtIdRadio").value;

    radioDelTerreno = parseFloat(radioDelTerreno);

    perimetroDelCirculo = 2 * Math.PI * radioDelTerreno;
    resultado = perimetroDelCirculo * 3;

    alert("Necesita " + resultado + "m de alambre");
}
function Materiales () 
{
	let largoDelTerreno;
    let anchoDelTerreno;
    let areaDelTerreno;
    let bolsaDeCemento;
    let bolsaDeCal;

    bolsaDeCal = 3;
    bolsaDeCemento = 2;
    largoDelTerreno = document.getElementById("txtIdLargo").value;
    anchoDelTerreno = document.getElementById("txtIdAncho").value;

    largoDelTerreno = parseFloat(largoDelTerreno);
    anchoDelTerreno = parseFloat(anchoDelTerreno);

    areaDelTerreno = largoDelTerreno * anchoDelTerreno; 
    bolsaDeCal = areaDelTerreno * bolsaDeCal;
    bolsaDeCemento = areaDelTerreno * bolsaDeCemento;

    alert("Usted necesita " + bolsaDeCemento + " bolsas de cemento y " + bolsaDeCal + " bolsas de cal");
}