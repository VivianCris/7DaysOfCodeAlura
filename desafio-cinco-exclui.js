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

  // ------------------------------------------------------------------
  //                  Começa a segunda parte do desafio

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

//----------------------------------------------------------------------
//                    Começa a terceira parte

const listaDeCompras = [vegetais, higiene];

//console.log(listaDeCompras);

const perguntaTres = "Deseja excluir algum item da lista de compras?";

const perguntaTresA = prompt(`${perguntaTres} Responda 1 para Sim  `);

const excluirItem = prompt(` Qual?  `);

if (perguntaTresA === "1") {
  listaDeCompras.slice(excluirItem);
}

console.log(listaDeCompras);
