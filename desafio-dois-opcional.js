const prompt = require("prompt-sync")();
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let linguagemEstudada = prompt(
  "Qual linguagem de programação você está estudando?"
);

let saudacao = `Olá, ${nome}, você tem ${idade} anos e está aprendendo ${linguagemEstudada}!`;

console.log(saudacao);

let sim = 1;
let nao = 2;
let answer = prompt(
  `Você gosta de estudar ${linguagemEstudada}?Responda com o número ${sim} para SIM ou ${nao} para NÃO.`
);

if (answer == sim) {
  answer = `${sim} > Muito bom!Continue estudando e você terá muito sucesso.`;
} else if (answer == nao) {
  answer = `${nao} > Ahh que pena... Já tentou aprender outras linguagens?`;
}

console.log(answer);
