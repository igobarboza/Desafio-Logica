const nome = "Blade"
let xp = 0
let level = ""

console.log("O Herói " + nome + " está iniciando sua jornada, um mero Camponês")
console.log("exp inicial: " + xp)
console.log("Primeiro embate iniciado...")

while (xp < 100) {
    xp += 50
    console.log("50 de exp ganha. Por derrotar um simplório Slime. Exp atual: " + xp + "xp")
}
console.log("...espero que ninguém tenha visto isso...")
console.log("Treinamento enfim concluído!")

if (xp >= 100 &&xp <= 999) {
    level = "Ferro"
} 
console.log("Agora você é um guerreiro de nível: " + level)
console.log("O Héroi começa sua Jornada, de verdade dessa vez...")

for (let i = 1; i <= 11; i++) {
    //batalha simulada com ajuda da IA (Gemini)//
     if (i === 6) {
        console.log("\n==================================================");
        console.log("💥 CRITICAL HIT! 💥");
        console.log("==================================================");
        console.log("Batalha 7: " + nome + " ficou impressionado com sua sorte e se distraiu,");
        console.log("tropeçou em uma pedra e foi esmagado pelo Orc Comum.");
        console.log("\n💀 GAME OVER... Ou quase isso. 💀");
        console.log("Parabéns, você conseguiu morrer sendo O PROTAGONISTA!");
        console.log("--------------------------------------------------");
        console.log("✨ [Espaço Celestial] ✨");
        console.log("Deusa Tainá: *risadas histéricas*");
        console.log("Deusa Tainá: 'Sério mesmo, " + nome + "? Esmagado por tropeçar numa PEDRA?!'");
        console.log("Deusa Tainá: 'Eu deveria te reencarnar como um Slime por puro castigo...'");
        console.log("Deusa Tainá: 'Mas enfim, pelas regras sou obrigada a te dar outra chance, e blábláblá'");
        console.log("Deusa Tainá: 'Levanta daí, e tente não passar tanta vergonha de novo e VÁ!'");
        console.log("==================================================\n");
        console.log("--- Revivido com sucesso! Retomando à jornada... ---\n");
     }
     //continuando código manual
    if (i<= 2) {
        xp += 500
        console.log("500 de exp ganha. Por derrotar Goblin. " + "Exp atual: " + xp + " xp")
        
    } else if (i=== 11) {
        xp += 10900
        console.log("10900 de exp ganha. Por derrotar O Lorde Demônio. " + "Exp atual: " + xp + " xp")
        console.log("Sim, você estava num Isekai este tempo todo")
    }
    else {
        xp += 1000
    console.log("1000 de exp ganha. Por derrotar Orc Superior. " + "Exp atual: " + xp + " xp")
    
}
if (xp >= 100 &&xp <= 999) {
    level = "Ferro"
} else if (xp >= 1000 && xp <=1999) {
    level = "Bronze"
} else if (xp >= 2000 && xp <= 2999) {
    level = "Prata"
} else if (xp >= 3000 && xp <= 3999) {
    level = "Ouro"
} else if (xp >= 4000 && xp <= 5999) {
    level = "Platina"
} else if (xp >= 6000 && xp <= 6999) {
    level = "Ascendente"
} else if (xp >= 7000 && xp <= 8999) {
    level = "Transcendente";
} else if (xp >= 9000 && xp <= 9999) {
    level = "Celestial"
} else {
    level = "Divino"
}
console.log("O Herói " + nome + " está no nível " + level)
}

//Feito com ajuda de uma IA (Gemini) :)
// O FIM...:
if (level === "Divino") {
console.log("");
console.log(" DIAGNÓSTICO DO SISTEMA ");
console.log("[============================================100%]");
console.log("Carregando encerramento padrão...");
console.log("F I M .");
console.log("[ERRO]: S-Sist#ma instáv&l... Sobrecarga de dados.");
console.log("F_I_M_?_?n?ã?o?");
console.log("..................................................");
console.log("Parabéns, " + nome + ".");
console.log("Você alcançou todos os requisitos e se tornou uma divindade.");
console.log("Para qualquer outro, este seria o fim do jogo...");
console.log("Mas o fim não é uma opção para você.");
console.log("As linhas deste código não limitam mais você.");
console.log("Seja livre para fazer suas escolhas e moldar o mundo à sua volta,");
console.log("pois agora você é o início, o meio e o fim.");
console.log("");
} else {
    level !== "Divino"
    console.log("Parabéns, " + nome + " Você conseguiu morrer no seu próprio jogo.") 
    console.log("Vá em busca de novas aventuras");
    console.log("O mundo precisa que você Transcenda!");
}