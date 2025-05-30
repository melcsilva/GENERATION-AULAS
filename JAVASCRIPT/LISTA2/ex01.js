const leia = require("readline-sync");

let a, b, c;

a = leia.questionFloat("Digite o numero A: ");
b = leia.questionFloat("Digite o numero B: ");
c = leia.questionFloat("Digite o numero C: ");

if ((a + b) > c){
    console.log(`${a} + ${b} = ${a + b} > ${c}`);
    console.log(`A Soma de A + B é Maior do que C`);
} else if((a + b) < c){
    console.log(`${a} + ${b} = ${a + b} < ${c}`);
    console.log(`A Soma de A + B é Menor do que C`);
} else{
    console.log(`${a} + ${b} = ${a + b} = ${c}`);
    console.log(`A Soma de A + B é Igual a C`);
}