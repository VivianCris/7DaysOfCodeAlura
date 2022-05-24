const prompt = require("prompt-sync")();

const respostaUm = "sim";
const respostaDois = "não";

const perguntaUm = "Deseja adicionar um item na sua lista de compras?";

const resposta = prompt(
  ` ${perguntaUm} Responda ${respostaUm} ou ${respostaDois}  `
);

let listaDeCompra = prompt(`Qual?   `);
let itens = [`${listaDeCompra},`];

console.log(itens);
