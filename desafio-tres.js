const prompt = require("prompt-sync")();

const opcaoUm = "Front End";
const opcaoDois = "Back End";

let questao = prompt(
  `Qual é a área que você deseja desenvolver? Responda: ${opcaoUm} ou ${opcaoDois}    `
);

let mensagem = "";

if (questao == opcaoUm) {
  mensagem = prompt(`Você gostaria de estudar React ou Vue?  `);
} else if (questao == opcaoDois) {
  mensagem = prompt(`Você gostaria de estudar C# ou Java?   `);
}
mensagem = `Que legal que você deseja se desenvolver em ${questao}! `;
console.log(mensagem);
