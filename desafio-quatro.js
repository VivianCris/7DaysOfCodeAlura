const prompt = require("prompt-sync")();

const numeroSorteado = 6;

let numero = prompt("Digite um número entre 1 a 10.  ");

console.log(`O número que você digitou foi ${numero}`);

let mensagem = "";

if (numero == numeroSorteado) {
  mensagem = `${numero} Parabéns, você acertou!`;
} else {
  mensagem = `${numero} Que pena, você errou!`;
}

console.log(mensagem);
