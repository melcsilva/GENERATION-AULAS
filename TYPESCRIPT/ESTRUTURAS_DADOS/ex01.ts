import { Queue } from "./fila"
import leia from 'readline-sync'
const fila = new Queue<string>();

/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila. */

let opcao;
let nome: string;

do { 
    console.log
    ("\n==================================" + 
    "\n1 - Adicionar Cliente na Fila" + 
    "\n2 - Listar todos os Clientes" + 
    "\n3 - Retirar Cliente da Fila" + 
    "\n0 - Sair" + 
    "\n==================================")

    opcao = leia.questionInt(`\nDigite a opcao que deseja: `)

switch (opcao) {
    case 0:
        console.log("\nPrograma Finalizado!")
        break;
    case 1:
        nome = leia.question("\nDigite o nome: ");
        fila.enqueue(nome);
        console.log(`\nCliente "${nome}" Adicionado com Sucesso!`);
        break;
    case 2:
    if(fila.isEmpty()) {
        console.log("\nA fila está vazia!");
    } else {
        console.log(`\nClientes na fila:`);
        fila.printQueue();
    }
    break;
    case 3:
        const remover = fila.dequeue();
        console.log("\nCliente foi Chamado!")
        break;
    default:
        console.log("\nOpção invalida")
}
} while (opcao != 0);