const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontosColab, salarioLiquido 

salarioBruto = leia.questionFloat("Salario Bruto: ");
adicionalNoturno = leia.questionFloat("Adicional Noturno: ");
horasExtras = leia.questionFloat("Horas Extras: ");
descontos = leia.questionFloat("Descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log("Salario Liquido: " +
	new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	}).format(salarioLiquido));