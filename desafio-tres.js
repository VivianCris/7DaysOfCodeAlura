const prompt = require("prompt-sync")();

const questao = prompt(
  `Qual é a área que você deseja desenvolver? Responda: Front End ou Back End    `
);

const resposta = `Que legal sua escolha por ${questao}  `;

console.log(resposta);

let area = "";

let mensagem = "";
