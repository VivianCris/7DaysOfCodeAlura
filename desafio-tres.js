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

const opUm = "Especializar";
const opDois = "Fullstack";

console.log(`Você deseja entre seguir se especializando na área escolhida
ou seguir se desenvolvendo para se tornar Fullstack?`);

let questaoDois = prompt(`Responda se ${opUm} ou se tornar ${opDois}: `);

let mensagemDois = "";

if (questaoDois == opUm) {
  mensagemDois = prompt(
    `É muito importante procurar entender e desenvolver novos conhecimentos a fim de aprimorar suas atividades.`
  );
} else if (questaoDois == opDois) {
  mensagemDois = prompt(`Continue se esforçando para se tornar habilitado
  para compreender e operar em todas as camadas do desenvolvimento de um projeto!`);
} else {
}

let mensagemFinal = `Que legal você deseja se ${questaoDois}! `;

console.log(mensagemDois);
