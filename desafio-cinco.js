const prompt = require("prompt-sync")({ sigint: true });

const respostaUm = "sim";
const respostaDois = "não";
let itens = [];

while (true) {
  const perguntaUm = "Deseja adicionar um item na sua lista de compras?";

  const resposta = prompt(
    ` ${perguntaUm} Responda ${respostaUm} ou ${respostaDois}  `
  );

  if (resposta === respostaDois) {
    console.log(`Nenhum item será adicionado a lista!`);
    break;
  }

  let produto = prompt(`Qual?   `);
  

  itens.push(produto);

  console.log(itens);
}

console.log(itens);


