const leia = require('readline-sync')

let lista = [10]
let soma = 0

for(let contador = 0; contador < 10; contador++){
    lista[contador] = leia.questionInt(`Escolha um numero: `)
    soma = soma + lista[contador]; //soma += lista[contador]
}   
// soma e media
console.log(`a soma da lista é ${soma}`);
console.log(`a media dos valores é: ` + (soma/lista.lenght)); //soma/10
//mostrar os num nos indices impares
for(let contador = 1; contador < 10; contador +=2){
    console.log(`O numero ${lista[contador]} esta no indice ${contador}`); //ex: o numero 5 ta no indice 1
}

//mostrar apenas os numeros pares
for(let contador = 0; contador < 10; contador++){
    if(lista[contador] % 2 === 0 ){
        console.log(`O numero ${lista[contador]} é par`);
    }
}

//somar todos os elementos do vetor


//nome_do_vetor.sort: ordem alfabetica
//nome_do_vetor.length: saber o tamanho do array