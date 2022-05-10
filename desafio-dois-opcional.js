const prompt = require("prompt-sync")();
const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade?");
const linguagemEstudada = prompt(
  "Qual linguagem de programação você está estudando?"
);

const saudacao = `Olá, ${nome}, você tem ${idade} anos e está aprendendo ${linguagemEstudada}!`;

console.log(saudacao);

const sim = 1;
const nao = 2;

const answer = prompt(
  `Você gosta de estudar ${linguagemEstudada}?Responda com o número ${sim} para SIM ou ${nao} para NÃO.`
);

let message;

if (answer == sim) {
  message = `${sim} > Muito bom!Continue estudando e você terá muito sucesso.`;
} else if (answer == nao) {
  message = `${nao} > Ahh que pena... Já tentou aprender outras linguagens?`;
}

console.log(message);
