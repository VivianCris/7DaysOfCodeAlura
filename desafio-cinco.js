const prompt = require("prompt-sync")();

const mensagem = prompt(`Deseja adicionar um item na sua lista de compras? `);

let itens = [];

for (let i = 0; i < 3; i++) {
  listaDeCompras = itens.push(`${mensagem}`);
}

console.log(itens);
