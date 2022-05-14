const prompt = require("prompt-sync")();

const numeroSorteado = 6;

let mensagem = "";

for (let i = 0; i < 3; i++) {
  numero = prompt("Digite um número entre 1 a 10.  ");

  if (numero == numeroSorteado) {
    mensagem = ` ${numero} Parabéns, você acertou! `;
    console.log(mensagem);
  } else {
    mensagem = ` ${numero} Que pena, você errou! `;
    console.log(mensagem);
  }
}

mensagem = `Você usou todas as chances e errou, o número 
  sorteado era o número ${numeroSorteado}!`;
console.log(mensagem);
