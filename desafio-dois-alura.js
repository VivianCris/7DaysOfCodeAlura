const prompt = require("prompt-sync")();
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let linguagemEstudada = prompt(
  "Qual linguagem de programação você está estudando?"
);

let saudacao = `Olá, ${nome}, você tem ${idade} e está aprendendo ${linguagemEstudada}!`;

console.log(saudacao);
