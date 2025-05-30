const leia = require("readline-sync");

/*Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3.*/

let num;
let soma = 0;
let contador = 0;

do{
    num = leia.questionInt(`Digite um numero: `);
    
    if(num !== 0 && num % 3 === 0){
        soma += num;
        contador++;
    }
    
}while(num !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`=================================================`);
    console.log(`A média de todos os números múltiplos de 3 é: ${media}`);
    console.log(`=================================================`);
} else{
    console.log(`=================================================`);
    console.log(`Nenhum número múltiplo de 3 foi digitado.`);
    console.log(`=================================================`);
}