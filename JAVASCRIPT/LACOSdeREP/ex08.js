const leia = require('readline-sync')

let lista = [10];
let soma = 0;

for(let contador = 0; contador < 10; contador++) {
    lista[contador] = leia.questionInt(`Digite um numero: `)
    soma += lista[contador];
}
console.log(`A soma da lista é: ${soma}`);
console.log(`A media dos valores é: ${soma/lista.length}`);
for(let contador = 1; contador < 10; contador += 2) {
    console.log(`Elementos nos indices impares: ${lista[contador]}`);
}

for(let contador = 0; contador < 10; contador++) {
    if(lista[contador] % 2 === 0){
        console.log(`Elementos pares: ${lista[contador]}`);
        
}
}       
