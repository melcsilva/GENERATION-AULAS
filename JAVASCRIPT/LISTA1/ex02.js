const leia = require('readline-sync');

let nota1, nota2, nota3, nota4

nota1 = leia.questionFloat("Nota 1: ");
nota2 = leia.questionFloat("Nota 2: ");
nota3 = leia.questionFloat("Nota 3: ");
nota4 = leia.questionFloat("Nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Media final: "+ media.toFixed(1));