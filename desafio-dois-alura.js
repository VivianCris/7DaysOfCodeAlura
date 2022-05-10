const prompt = require("prompt-sync")();
const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade?");
const linguagemEstudada = prompt(
  "Qual linguagem de programação você está estudando?"
);

const saudacao = `Olá, ${nome}, você tem ${idade} anos e está aprendendo
${linguagemEstudada}!`;

console.log(saudacao);
