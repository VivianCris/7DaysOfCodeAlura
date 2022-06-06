const prompt = require("prompt-sync")({ sigint: true });

//---------------------- Início do programa -----------------------
// Usuário escolhe a operação

const sim = "S";
const nao = "N";

let numerosOperacao = [];

const escolherOperacao = "Digite a operação que você deseja realizar: ";
const perguntaOperacao = prompt(
  `${escolherOperacao}1- soma 2- subtrai 3- multiplica 4- divide:  `
);

while (true) {
  const perguntaUm = "Deseja adicionar um número para a operação?";
  const resposta = prompt(` ${perguntaUm} Responda ${sim} ou ${nao}  `);

  if (resposta === "N") {
    console.log(`Nenhum número será adicionado a operação!`);
    break;
  }

  let valoresOperacao = prompt(`Qual?   `);

  numerosOperacao.push(valoresOperacao);
  console.log(numerosOperacao);
}
console.log(numerosOperacao);
// --------------------------- Funções para cada operação --------------

function somar(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero;
}

//console.log(somar(12, 14));

function subtrair(primeiroNumero, segundoNumero) {
  return primeiroNumero - segundoNumero;
}

//console.log(subtrair(18, 14));

function multiplicar(primeiroNumero, segundoNumero) {
  return primeiroNumero * segundoNumero;
}

//console.log(multiplicar(12, 14));

function dividir(primeiroNumero, segundoNumero) {
  return primeiroNumero / segundoNumero;
}

//console.log(dividir(28, 14));

// ---------------- a partir da escolha da operação faz algo -------

// if (perguntaOperacao === "1") {
// }
// if (perguntaOperacao === "2") {
// }
// if (perguntaOperacao === "3") {
// }
// if (perguntaOperacao === "4") {
// }
