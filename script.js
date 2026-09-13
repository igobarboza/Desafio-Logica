console.log("Detalhes do Personagem:");

let pontosDeVida = 1;
console.log("Pontos de Vida: " + pontosDeVida + "/14");
for(let i = 2; i <= 14; i++){
    pontosDeVida += 1;
    console.log("Tomou poção da Yggdrasil +1 de HP: " + i + "/14");
}
console.log("HP total: " + pontosDeVida + "/14")