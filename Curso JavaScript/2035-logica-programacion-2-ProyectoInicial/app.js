let NumeroSecreto = GenerarNumero();

function VerificarIntento() {
    let NumeroElegido = parseInt(document.getElementById("valorUsuario").value);
    console.log(NumeroElegido);
    console.log(NumeroSecreto);
    console.log(NumeroElegido === NumeroSecreto);
    return;
}

function AsignarTexto(Elemento, Texto) {
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML = Texto;
    return;
}

function GenerarNumero() {
    return Math.floor(Math.random()*10)+1;
}

AsignarTexto("h1","Juego del número secreto.");
AsignarTexto("p","Ingresa un número del 1 al 10:");

function Act1() {
    console.log("Hola Mundo!");
}

function Act2(Nombre) {
    console.log(`Hola ${Nombre}!!`);
}

function Act3(Numero) {
    console.log(parseInt(Numero)*2);
}

function Act4(Num1, Num2, Num3) {
    console.log((parseInt(Num1)+parseInt(Num2)+parseInt(Num3))/3);
}

function Act5(Num1, Num2) {
    if (Num1 < Num2) {
        console.log(Num2);
    } else {
        console.log(Num1);
    }
}

function Act6(Numero) {
    console.log(parseInt(Numero)*parseInt(Numero));
}

Act1(); //Hola Mundo
Act2("Fran"); //Hola Fran
Act3(5); //Doble - 10
Act4(2,3,4); //Promedio - 3
Act5(10,20); //Mayor - 20
Act6(5); //Potencia - 25