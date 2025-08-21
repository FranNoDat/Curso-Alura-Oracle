let Titulo = document.querySelector("h1");
Titulo.innerHTML = "Hora de Desafío";

function Click() {
    alert("El botón fue clickeado");
}

function Ciudad() {
    let Respuesta = prompt("Dime el nombre de una ciudad en Brasil.");
    alert(`Estuve en ${Respuesta} y me acordé de ti.`);
}

function Alerta() {
    alert("Yo amo JS");
}

function Suma() {
    let Num1 = parseInt(prompt("Ingrese el primer número: "));
    let Num2 = parseInt(prompt("Ingrese el segundo número: "));
    alert(`El resultado de la suma es ${Num1 + Num2}`)
}

//Esto es una prueba