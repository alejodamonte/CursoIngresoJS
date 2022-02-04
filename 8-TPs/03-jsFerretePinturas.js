/*

Alejo Damonte DIV g

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura
    let resultado
    
    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    resultado = (temperatura - 32) / 1.8000;
    
    alert(temperatura + " Fahrenheit son " + resultado " centigrados");
}

function CentigradosFahrenheit () 
{
    let temperatura
    let resultado
    
    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    resultado = (temperatura * 1.8000) + 32;
    
    alert(temperatura + " Centigrados son " + resultado " Fahrenheit");
}

