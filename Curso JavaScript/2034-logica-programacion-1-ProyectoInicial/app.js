

let NumeroRealMal = Math.floor(Math.random()*10)+1;
let PorongaDeMono;
let Intentos = 1;
let MaximosIntentos = 3;

//console.log(NumeroRealMal);

while (PorongaDeMono != NumeroRealMal) {
    PorongaDeMono = parseInt(prompt("Decime un número pendejo violado, más vale que sea entre 1 y 10."));
    console.log(typeof(PorongaDeMono));

    if (PorongaDeMono == NumeroRealMal) {
        alert(`Acertaste imbecil, el número es: ${PorongaDeMono}. Lo tuviste que intentar ${Intentos} ${Intentos == 1 ? "vez" : "veces"}.`);
    } else {
        if (PorongaDeMono > NumeroRealMal) {
            alert("Te pasaste gil")
        } else {
            alert("Un poco más pa")  
        }
    
        Intentos ++;
        if (Intentos > MaximosIntentos) {
            alert(`Te pasaste los ${MaximosIntentos} intentos, rajá de acá.`);
            break;
        }
    }
}


/*
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
} 
*/

/*
let DiaSemana = prompt("Ingrese el día de la semana: ");

if (DiaSemana == "Sábado") {
    alert("¡Buena semana!")
} else if (DiaSemana == "Domingo") {
    alert("¡Buena semana!")
}

let Numero = prompt("Ingrese un número: ");

if (Numero > 0) {
    alert("¡Es positivo!")
} else if (Numero < 0) {
    alert("¡Es negativo!")
} else {
    alert("¡ES CEROOO!")
}

let Puntuacion = prompt("Ingrese su puntuación: ");

if (Puntuacion >= 100) {
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intentalo nuevamente para ganar")
}

let Saldo = 10351.37;

alert(`Su saldo es $${Saldo}`);

let Nombre = prompt("Ingrese su nombre: ");
alert(`¡Bienvenido ${Nombre}!`);

*/
/*
let Contador = prompt("Ingresá el número: ");

while (Contador <= 10) {
    alert(`Iteración número ${Contador}`)
    Contador += 1
}

while (Contador >= 0) {
    alert(`Cuenta regresiva... ${Contador}`)
    Contador -= 1
}

while (Contador >= 0) {
    alert(`Cuenta regresiva... ${Contador}`)
    Contador -= 1
}

let Vueltas = 0;
while (Vueltas <= Contador) {
    alert(`Cuenta progresiva... ${Vueltas}`)
    Vueltas += 1
}

let Mensaje = "¡Encontraste el easter egg!"
console.log(Mensaje)

let Nombre = prompt("Ingrese su nombre: ");
console.log(`¡Estás haciendolo muy bien ${Nombre}!`)

alert(`¡Estás haciendolo muy bien ${Nombre}!`)

let Respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(Respuesta)

let Valor1 = 10;
let Valor2 = 20;
let Resultado = Valor1 + Valor2;
console.log(`La suma de las variables es ${Resultado}`);

let Valor1 = 10;
let Valor2 = 20;
let Resultado = Valor1 - Valor2;
console.log(`La suma de las variables es ${Resultado}`);

let Edad = prompt("Ingrese su edad");
if (Edad < 18) {
    console.log("Sos chiquitito :C")
} else {
    console.log("Sos grandote :D")
}

let Numero = prompt("Ingrese un número: ");
if (Numero == 0); {
    alert("Es cero");
} else if (Numero < 0); {
    alert("Es negativo");
} else if (Numero > 0); {
    alert("Es positivo");
}

let ahre = 1;
while (ahre < 11) {
    alert(ahre);
    ahre ++;
}

let Nota = 8;
if (Nota < 7) {
    alert("Sos un choto...")
} else {
    alert("Que maestro, aprobaste.")
}

console.log(Math.random())

console.log(Math.random()*9+1)

console.log(Math.random()*999+1)

*/
