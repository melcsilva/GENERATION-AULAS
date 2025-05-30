const leia = require("readline-sync");

let nomeCol, codCargo, nomeCargo, prcn, salario, novoSal;

// console.log("Código do Cargo\t|\tCargo \t\t|Percentual do Reajuste")
// console.log("----------------|-----------------------|-----------------------")
// console.log("\t1\t|Gerente\t\t|10%")
// console.log("\t2\t|Vendedor\t\t|7%")
// console.log("\t3\t|Surpevisor\t\t|9%")
// console.log("\t4\t|Motorista\t\t|6%")
// console.log("\t5\t|Estoquista\t\t|5%")
// console.log("\t6\t|Tecnico de TI\t\t|8%")

// console.log("===============================================================")
nomeCol = leia.question("Digite o Nome do Colaborador: ");
codCargo = leia.questionInt("Digite o Codigo do Cargo do Colaborador: ")
salario = leia.questionFloat("Digite o Salario Atual do Colaborador: ");

switch(codCargo){
    case 1:
        nomeCargo = "Gerente";
        prcn = 0.10
        break;
    case 2:
        nomeCargo = "Vendedor";
        prcn = 0.07
        break;
    case 3:
        nomeCargo = "Surpevisor";
        prcn = 0.09
        break;
    case 4:
        nomeCargo = "Motorista";
        prcn = 0.06
        break;
    case 5:
        nomeCargo = "Estoquista";
        prcn = 0.05
        break;
    case 6:
        nomeCargo = "Tecnico de TI";
        prcn = 0.08
        break;
    default:
        console.log("Digite um codigo de cargo valido!");
        return;
}

novoSal = salario + (prcn * salario);
// console.log("============================================")
console.log(`Nome do Colaborador: ${nomeCol}`);
// console.log("============================================")
console.log(`Cargo do Colaborador: ${nomeCargo}`);
// console.log("============================================")
console.log(`Salário: R$ ${novoSal.toFixed(2)}`);