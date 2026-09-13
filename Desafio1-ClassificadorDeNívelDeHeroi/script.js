const nome = "Blade"
let xp = 100000
let level = ""

if (xp <= 999) {
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
    console.log("Parabéns, " + nome + " Você concluiu o jogo com sucesso.") 
    console.log("Vá em busca de novas aventuras");
    console.log("O mundo precisa que você Transcenda!");
}
