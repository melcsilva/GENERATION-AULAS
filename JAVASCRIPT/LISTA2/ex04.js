const leia = require("readline-sync");

let str1, str2, str3

console.log("======================")
console.log("Jogo da Adivinhacao")
console.log("======================")

str1 = leia.question("Vertebrado ou Invertebrado: ");

if(str1 === "Vertebrado"){
    str2 = leia.question("Ave ou Mamifero: ");

    if(str2 === "Ave"){
        str3 = leia.question("Carnivoro ou Onivoro: ");
        if(str3 === "Carnivoro"){
            console.log("======================")
            console.log("\tÁguia\t");
            console.log("======================")
        }else if(str3 === "onivoro") {
            console.log("======================")
            console.log("\tPomba\t");
            console.log("======================")
        }

    }else if(str2 === "Mamifero"){
        str3 = leia.question("Onivoro ou Herbivoro: ");
        if(str3 === "Onivoro") {
            console.log("======================")
            console.log("\tHomem\t");
            console.log("======================")
        }else if(str3 === "Herbivoro"){
            console.log("======================")
            console.log("\tVaca\t");
            console.log("======================")
        }
    }
}else if(str1 === "Invertebrado"){
    str2 = leia.question("Inseto ou Anelideo: ");

    if(str2 == "Inseto"){
        str3 = leia.question("Hematofago ou Herbivoro: ");
        if(str3 === "Hematofago"){
            console.log("======================")
            console.log("\tPulga\t");
            console.log("======================")
        }else if(str3 === "Herbivoro"){
            console.log("======================")
            console.log("\tLagarta\t");
            console.log("======================")
        }

    }else if(str2 === "Anelideo"){
        str3 = leia.question("Hematofago ou Onivoro: ");
            if(str3 === "Hematofago"){
                console.log("======================")
                console.log("\tSanguessuga\t");
                console.log("======================")
            }else if(str3 === "Onivoro"){
                console.log("======================")
                console.log("\tMinhoca\t");
                console.log("======================")
            }
        }
    }
