const leia = require('readline-sync');

let n1, n2, n3, n4

n1 = leia.questionFloat("Numero1: ");
n2 = leia.questionFloat("Numero2: ");
n3 = leia.questionFloat("Numero3: ");
n4 = leia.questionFloat("Numero4: ");

let calculo = (n1 * n2) - (n3 * n4)
console.log("Diferença: "+ calculo.toFixed(1));