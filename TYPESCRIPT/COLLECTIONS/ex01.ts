import leia from 'readline-sync'

const lista: Array<string> = new Array<string>()

for(let contador = 0; contador < 5; contador++) {
    lista.push(leia.question('Digite uma cor: '))
}

console.log("===================");
console.log("Lista das cores");

for(let cor of lista) {
    console.log(cor);
}
console.log("===================");
console.log("Lista Ordenada");

for(let cor of lista) {
    console.log(cor);
}