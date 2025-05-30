const leia = require("readline-sync");

let totalIm = 0, totalPar = 0, numeros;

for (let i = 1; i <= 10; i++){
    numeros = leia.questionInt(`Digite o ${i} numero: `)

    if (numeros % 2 === 0){
        totalPar++
    }else if (numeros % 2 != 0){
        totalIm++
    }
}
console.log(`Total de números pares: ${totalPar}`);
console.log(`Total de números ímpares: ${totalIm}`);