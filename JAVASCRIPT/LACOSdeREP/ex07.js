const leia = require("readline-sync");

let lista = [2, 5, 1, 3, 4, 9, 7, 8, 10 ,6];
let numero; 

numero = leia.questionInt(`Digite o numero que voce deseja encontrar: `);
if(lista.indexOf(numero) !== -1){
    console.log(`O numero ${numero} está localizado na posição ${lista.indexOf(numero)}`);
}else {
    console.log(`O numero ${numero} não foi localizado!`)
}