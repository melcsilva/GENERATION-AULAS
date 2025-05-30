const leia = require("readline-sync");

let operacao, valor, saldo = 1000.00

console.log("Código da Operacao |\tOperacao")
console.log("-------------------|----------------")
console.log("\t1\t   |\tSaldo")
console.log("\t2\t   |\tSaque")
console.log("\t3\t   |\tDeposito")
console.log("-------------------|----------------")

operacao = leia.questionInt("\nDigite a Operacao: ");

switch(operacao){
    case 1:
        console.log("\n--------------------------------------")
        console.log("\tOperação - Consulta de Saldo\t")
        console.log(`\nSeu saldo atual é de R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        valor = leia.questionFloat("\nDigite o valor de saque: ")
        if(valor > saldo){
            console.log("\n------------------------------")
            console.log("\nSaldo Insuficiente!");
        } else{
            saldo -= valor;
            console.log("\n------------------------------")
            console.log("\tOperação - Saque\t")
            console.log(`Seu novo saldo é de: R$ ${saldo.toFixed(2)}`);
        }
        
        break;
    case 3:
        valor = leia.questionFloat("\nDigite o valor de deposito: ");
        saldo += valor;
        console.log("\n------------------------------")
            console.log("\tOperação - Depósito\t")
        console.log(`\nSeu Saldo Atual é de: R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log("-----------------------")
        console.log("\nOperação Inválida!");
        return;
}