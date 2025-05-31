/* Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. */

import leia = require('readline-sync');

const lista: Set<number> = new Set<number>()
let numeros: number

for(let contador = 0; contador < 10; contador++) {
    numeros = (leia.questionInt('Digite um numero: '))
    lista.add(numeros)
}
const numerosOrdenados = Array.from(lista).sort((a, b) => a - b);

console.log("========================================");
console.log(lista);
console.log("========================================");
for(let num of numerosOrdenados) {
    console.log(num)
}