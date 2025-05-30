const leia = require("readline-sync");

let num1, num2, numOpr, opr

console.log("\tCódigo\t|\tOperacao")
console.log("----------------|-----------------------")
console.log("\t1\t|\tSoma")
console.log("\t2\t|\tSubtracao")
console.log("\t3\t|\tMultiplicacao")
console.log("\t4\t|\tDivisao")

console.log("----------------------------------------")
num1 = leia.questionFloat("Digite o 1 Numero: ");
num2 = leia.questionFloat("Digite o 2 Numero: ");
opr = leia.questionInt("Digite a Operacao: ");

switch(opr){
    case 1:
        numOpr = "Soma";
        opr = num1 + num2
        console.log("-----------------------")
        console.log(`${num1} + ${num2} = ${opr}`)
        break;
    case 2:
        numOpr = "Subtracao";
        opr = num1 - num2
        console.log("-----------------------")
        console.log(`${num1} - ${num2} = ${opr}`)
        break;
    case 3:
        numOpr = "Multiplicacao";
        opr = num1 * num2
        console.log("-----------------------")
        console.log(`${num1} x ${num2} = ${opr}`)
        break;
    case 4:
        numOpr = "Divisao";
        opr = num1 / num2
        console.log("-----------------------")
        console.log(`${num1} % ${num2} = ${opr}`)
        break;
    default:
        console.log("-----------------------")
        console.log("Operacao Invalida!");
        return;
}
