const prompt = require("prompt-sync")({ sigint: true });

const respostaUm = "S";
const respostaDois = "N";
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

  let vegetais = [];
  let higiene = [];
  let groceries = [];

  produto = prompt(`Qual categoria esse item se encaixa?   `);

  console.log(itens);
}

console.log(itens);
