const prompt = require("prompt-sync")();

const numeroSorteado = Math.round(Math.random() * 10);

let mensagem = "";

for (let i = 0; i < 3; i++) {
  numero = prompt("Digite um número entre 1 a 10.  ");

  if (numero == numeroSorteado) {
    mensagem = ` ${numero} Parabéns, você acertou! `;
    console.log(mensagem);
    break;
  } else {
    mensagem = ` ${numero} Que pena, você errou! `;
    console.log(mensagem);
  }
}

if (numero != numeroSorteado) {
  mensagem = `Você usou todas as chances e errou, o número 
  sorteado era o número ${numeroSorteado}!`;
  console.log(mensagem);
}
