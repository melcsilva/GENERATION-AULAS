/*Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.*/

import leia from 'readline-sync'

const lista: Array<string> = new Array<string>()

for(let contador = 0; contador < 5; contador++) {
    lista.push(leia.question('Digite uma cor: '))
}

console.log(lista);

for(let cor of lista) {
    console.log(cor);
}

console.log(lista.sort);
for(let cor of lista) {
    console.log(cor);
}