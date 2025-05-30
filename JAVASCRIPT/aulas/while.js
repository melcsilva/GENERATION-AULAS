const leia = require('readline-sync')
let num1, num2, resultado;
let continuar = true

for(let contador = 0; contador <3; contador++) {
    num1 = leia.questionInt('Digite o primeiro valor: ');

    num2 = leia.questionInt('Digite o segundo valor: ');

    resultado = num1 + num2;

    console.log("O resultado da soma é: "+ resultado);
}

while (continuar) {
    num1 = leia.questionInt('Digite o primeiro valor: ');

    num2 = leia.questionInt('Digite o segundo valor: ');

    resultado = num1 + num2;

    console.log("O resultado da soma é: "+ resultado);

    continuar = leia.keyInYNStrict("Gostaria de repetir? ")
}

do {
    num1 = leia.questionInt('Digite o primeiro valor: ');

    num2 = leia.questionInt('Digite o segundo valor: ');

    resultado = num1 + num2;

    console.log("O resultado da soma é: "+ resultado);

    continuar = leia.keyInYNStrict("Gostaria de repetir? ")
}while (continuar === true)