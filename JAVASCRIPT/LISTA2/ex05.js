const leia = require("readline-sync");

let cdg, pdt, prUn

// console.log("Código do Produto|\t Produto \t|Preço Unitário")
// console.log("-----------------|----------------------|--------------")
// console.log("\t1\t |Cachorro Quente\t|R$ 10.00")
// console.log("\t2\t |X-Salada\t\t|R$ 15.00")
// console.log("\t3\t |X-Bacon\t\t|R$ 18.00")
// console.log("\t4\t |Bauru\t\t\t|R$ 12.00")
// console.log("\t5\t |Refrigerante\t\t|R$ 8.00")
// console.log("\t6\t |Suco de Laranja\t|R$ 13.00")

// console.log("=================================================")
cdg = leia.questionInt("Digite o Codigo do Produto: ");
qtd = leia.questionInt("Digite a Quantidade: ");

switch(cdg){
    case 1:
        pdt = "Cachorro Quente";
        prUn = 10.00
        break;
    case 2:
        pdt = "X-Salada";
        prUn = 15.00
        break;
    case 3:
        pdt = "X-Bacon";
        prUn = 18.00
        break;
    case 4:
        pdt = "Bauru";
        prUn = 12.00
        break;
    case 5:
        pdt = "Refrigerante";
        prUn = 8.00
        break;
    case 6:
        pdt = "Suco de Laranja";
        prUn = 13.00
        break;
    default:
        console.log("Digite um codigo valido!")
        return;
}

let total = qtd * prUn;
// console.log("============================================")
console.log(`Produto Escolhido: ${pdt}`);
// console.log("============================================")
console.log(`Valor A Pagar: R$ ${total.toFixed(2)}`);