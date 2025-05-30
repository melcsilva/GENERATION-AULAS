const leia = require("readline-sync");

let numero

numero = leia.questionInt("Digite um numero: ");

if ((numero % 2 === 0) && (numero > 0)){
    console.log(`O Numero ${numero} é par e positivo`);
} else if ((numero % 2 === 0) && (numero < 0)){
    console.log(`O Numero ${numero} é par e negativo`);
}
else if ((numero % 2 != 0) && (numero > 0)){
    console.log(`O Numero ${numero} é impar e positivo`);
} else{
    console.log(`O Numero ${numero} é impar e negativo`);
}