const leia = require("readline-sync");

let nome, idade, primeiraVez

nome = leia.question("Digite o nome do doador: ");
idade = leia.questionInt("\nDigite a idade do doador: ");
primeiraVez = leia.question("\nPrimeira doacao de sangue? ");

if (idade <= 18 || idade >= 69 && primeiraVez === true){
    console.log("\n===================================")
    console.log(`${nome} não está apto para doar sangue!`)
} else{
    console.log("\n===================================")
    console.log(`${nome} está apto para doar sangue`)
}