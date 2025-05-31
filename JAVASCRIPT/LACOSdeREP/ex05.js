const leia = require("readline-sync");
/*Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.*/
let positivo = 0;
let num;

do{
    num = leia.questionInt(`Digite um numero, por favor: `)

    if(num > 0){
        positivo += num;
    }
}while(num !== 0);

console.log(`====================================`);
console.log(`\nA soma dos números positivos é: ${positivo}\n`);
console.log(`====================================`);