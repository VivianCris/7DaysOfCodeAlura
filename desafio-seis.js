const prompt = require("prompt-sync")({ sigint: true });

function somar(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

const introducao = " Siga as instruções!";

const introducaoCalc = prompt(`${introducao}`);

const sim = "S";
const nao = "N";
let numerosOperacao = [];

const escolherOperacao = "Digite a operação que você deseja realizar: ";
const perguntaOperacao = prompt(
  `${escolherOperacao} 1- soma 2- subtrai 3- multiplica 4- divide:  `
);

const primeiroNumero = prompt(`Digite o primeiro número:  `);
const segundoNumero = prompt(`${primeiroNumero} Digite o segundo número:  `);

numerosOperacao.push(Number(primeiroNumero));
numerosOperacao.push(Number(segundoNumero));

console.log(numerosOperacao);

switch (perguntaOperacao) {
  case "1":
    operacao = somar(numerosOperacao[0], numerosOperacao[1]);
    break;
  case "2":
    operacao = subtrair(numerosOperacao[0], numerosOperacao[1]);
    break;
  case "3":
    operacao = multiplicar(numerosOperacao[0], numerosOperacao[1]);
    break;
  case "4":
    operacao = dividir(numerosOperacao[0], numerosOperacao[1]);
    break;
}

console.log(operacao);
