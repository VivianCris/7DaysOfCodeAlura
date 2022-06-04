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

  const categoria = prompt(`${perguntaDois} "1 = vegetais", "2 = higiene"? `);

  if (categoria === "1") {
    vegetais.push(produto);
  } else if (categoria === "2") {
    higiene.push(produto);
  }

  console.log(itens);
}

console.log("Vegetais: " + vegetais + ", Higiene: " + higiene);

//----------------------------------------------------------------------
//                    Começa a terceira parte

let listaDeCompras = [vegetais, higiene];

const perguntaTres = "Deseja excluir algum item da lista de compras?";

const perguntaTresA = prompt(`${perguntaTres} Responda 1 para Sim  `);

let lista = `Vegetais: ${vegetais} Higiene: ${higiene}`;

let excluirItem = prompt(`Lista de compras:  ${lista}  Qual?  `);

if (vegetais.indexOf(excluirItem) != -1) {
  vegetais.splice(vegetais.indexOf(excluirItem), 1);
  console.log(`O item ${excluirItem} foi removido com sucesso!`);
} else if (higiene.indexOf(excluirItem) != -1) {
  higiene.splice(higiene.indexOf(excluirItem), 1);
  console.log(`O item ${excluirItem} foi removido com sucesso!`);
}

console.log(listaDeCompras);
