const prompt = require("prompt-sync")({ sigint: true });

const respostaUm = "sim";
const respostaDois = "não";
let itens = [];

while (respostaUm) {
  const perguntaUm = "Deseja adicionar um item na sua lista de compras?";

  const resposta = prompt(
    ` ${perguntaUm} Responda ${respostaUm} ou ${respostaDois}  `
  );

  let produto = prompt(`Qual?   `);

  itens.push(produto);

  console.log(itens);
}
