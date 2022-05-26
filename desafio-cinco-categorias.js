const prompt = require("prompt-sync")({ sigint: true });

const respostaUm = "S";
const respostaDois = "N";

let itens = [];
let vegetais = [];
let higiene = [];

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

  const perguntaDois = "Qual categoria esse item se encaixa: ";

  const categoria = prompt(`${perguntaDois} "vegetais", "higiene"?   `);

  if (categoria === "vegetais") {
    vegetais.push(produto);
  } else if (categoria === "higiene") {
    higiene.push(produto);
  }

  console.log(itens);
}

console.log("Vegetais: " + vegetais + ", Higiene: " + higiene);
