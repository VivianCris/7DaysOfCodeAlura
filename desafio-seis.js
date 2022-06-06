const prompt = require("prompt-sync")({ sigint: true });

//---------------------- Início do programa -----------------------
// Usuário escolhe a operação

const escolherOperacao = "Digite a operação que você deseja: ";

const perguntaOperacao = prompt(
  `${escolherOperacao}1- soma 2- subtrai 3- multiplica 4- divide:  `
);

console.log(perguntaOperacao);

// --------------------------- Funções para cada operação --------------

function somar(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero;
}

console.log(somar(12, 14));

function subtrair(primeiroNumero, segundoNumero) {
  return primeiroNumero - segundoNumero;
}

console.log(subtrair(18, 14));

function multiplicar(primeiroNumero, segundoNumero) {
  return primeiroNumero * segundoNumero;
}

console.log(multiplicar(12, 14));

function dividir(primeiroNumero, segundoNumero) {
  return primeiroNumero / segundoNumero;
}

console.log(dividir(28, 14));
