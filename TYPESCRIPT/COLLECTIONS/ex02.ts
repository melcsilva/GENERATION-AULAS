import leia = require('readline-sync');

/*Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. OK
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro OK
e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. OK
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! OK */

const lista: Array<number> = new Array<number>(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
let numeroDigitado

do {
    numeroDigitado = leia.questionInt('Digite o numero que voce deseja encontrar: ');

    if (lista.includes(numeroDigitado)) {
        let posicao = lista.indexOf(numeroDigitado);
        console.log(`O numero ${numeroDigitado} está na posição: ${posicao}`);
    } else {
        console.log(`O numero ${numeroDigitado} não foi encontrado!`)
    }
}while (numeroDigitado !== 0);
