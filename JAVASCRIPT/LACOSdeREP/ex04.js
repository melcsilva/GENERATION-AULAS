const leia = require("readline-sync");
let continua = true; 
let totalBackend = 0;
let mulherCisTransFront = 0;
let homemCisTransMobile40 = 0;
let naoBinariosFullStack30 = 0;
let totalPesquisa = 0;
let somaIdade = 0;
let pessoaDev, idade, identidadeGenero;

console.log
    ("===========================" +
    "\n Identidade de Gênero:" +
    "\n1 - Mulher Cis" + 
    "\n2 - Homem Cis" +
    "\n3 - Não Binário" +
    "\n4 - Mulher Trans" +
    "\n5 - Homem Trans" +
    "\n6 - Outros" + 
    "\n===========================");
console.log
    ("Pessoa Desenvolvedora:" +
    "\n1 - Backend" + 
    "\n2 - Frontend" +
    "\n3 - Mobile" +
    "\n4 - FullStack" +
    "\n===========================");

/*O número de pessoas desenvolvedoras Backend OK
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa*/

while (continua) {
    idade = leia.questionInt(`Digite a idade: `);
    identidadeGenero = leia.questionInt(`Identidade de Genero: `);
    pessoaDev = leia.questionInt(`Pessoa Desenvolvedora: `);


    totalPesquisa++;
    somaIdade += idade;

// Backend
if (pessoaDev === 1) {
        totalBackend++;
    }

//Mulheres Cis e Trans Front End
if ((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDev === 2) {
        mulherCisTransFront++;
    }

//Homens Cis e Trans Mobile +40
if ((identidadeGenero === 2 || identidadeGenero === 5) && pessoaDev === 3 && idade > 40) {
        homemCisTransMobile40++;
    }

//Não Binários Dev FullStack -30]
if ((identidadeGenero === 3) && pessoaDev === 4 && idade < 30) {
        naoBinariosFullStack30++;
    }

    console.log("***************************");
    continua = leia.keyInYNStrict("\nDeseja continuar?");
    console.log("\n***************************");
}

let mediaIdade = totalPesquisa > 0 ? (somaIdade / totalPesquisa).toFixed(2) : 0;

console.log("\n======= RESULTADOS DA PESQUISA =======");
console.log(`Total de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Numero de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherCisTransFront}`);
console.log(`Numero de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemCisTransMobile40}`);
console.log(`Numero de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinariosFullStack30}`);
console.log(`Numero Total de pessoas que responderam a pesquisa: ${totalPesquisa}`);
console.log(`Média de idade das pessoas que responderam a pesquisa: ${mediaIdade}`);