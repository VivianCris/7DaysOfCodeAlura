const prompt = require("prompt-sync")({ sigint: true });
const escolherOperacao = "Digite a operação que você deseja: ";

const perguntaOperacao = prompt(
  `${escolherOperacao}1- soma 2- subtrai 3- multiplica 4- divide:  `
);

console.log(perguntaOperacao);
