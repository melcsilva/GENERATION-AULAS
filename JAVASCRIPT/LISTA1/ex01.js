const leia = require('readline-sync');

let salario, abono, novoSalario

salario = leia.questionFloat("Salario atual do funcionario: ");
abono = leia.questionFloat("Digite o abono: ");

novoSalario = salario + abono

console.log("Novo Salario:\t " +
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(novoSalario));
