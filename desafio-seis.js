const prompt = require("prompt-sync")({ sigint: true });

//---------------------- Início do programa -----------------------
// Usuário escolhe a operação

const sim = "S";
const nao = "N";
let numerosOperacao = [];

// const escolherOperacao = "Digite a operação que você deseja realizar: ";
// const perguntaOperacao = prompt(
//   `${escolherOperacao}1- soma 2- subtrai 3- multiplica 4- divide:  `
// );

while (true) {
  const perguntaUm = "Deseja adicionar um número para a operação?";
  const resposta = prompt(` ${perguntaUm} Responda ${sim} ou ${nao}  `);

  if (resposta === "N") {
    console.log(`Nenhum número será adicionado a operação!`);
    break;
  }

  const valoresOperacao = prompt(`Qual?   `);

  numerosOperacao.push(valoresOperacao);

  console.log(numerosOperacao);
}

console.log(numerosOperacao);
// --------------------------- Funções para cada operação --------------

function somar(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtrair(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiplicar(num1, num2) {
  return Number(num1) * Number(num2);
}

function dividir(num1, num2) {
  return Number(num1) / Number(num2);
}

// ---------------- a partir da escolha da operação faz algo -------

console.log(somar(numerosOperacao[0], numerosOperacao[1]));
console.log(subtrair(numerosOperacao[0], numerosOperacao[1]));
console.log(multiplicar(numerosOperacao[0], numerosOperacao[1]));
console.log(dividir(numerosOperacao[0], numerosOperacao[1]));
