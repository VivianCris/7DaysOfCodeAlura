const prompt = require("prompt-sync")();

const frontEnd = 1;
const backEnd = 2;

const question = prompt(
  `Qual é a área de desenvolvimento que você deseja seguir? Responda número ${frontEnd} para Front-End e número ${backEnd} para Back-End`
);
let messagemUm;

if (question == frontEnd) {
  messagemUm = "Você se interessa em aprender React ou Vue?";
} else if (question == backEnd) {
  messagemUm = "Você se interessa em aprender C# ou Java?";
}
//mensagemUm = ` Interessante , ${question} Essa é uma boa escolha!`;

console.log(messagemUm);

// const fullstack = 1;
// const aprofundarArea = 2;

// const futurasDecisoes = prompt(
//   `Você prefere se tornar fullstack ou seguir se aprofundando na área? Responda ${fullstack} para fullstack ou ${aprofundarArea} para seguir se especializando`
// );

// let messagemDois;

// if (futurasDecisoes == fullstack) {
//   messagemDois =
//     "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side.";
// } else if (futurasDecisoes == aprofundarArea) {
//   messagemDois = `Continue estudando para se desenvolver nessa área!`;
// }

// console.log(messagemDois);

// const interessaLinguagem = prompt(
//   `Que outras linguagens você gostaria de estudar?`
// );

// let novaLinguagem = "";

// const outrasOpcoes = prompt(
//   `Além de ${novaLinguagem} quais outras você gostaria de estudar? Digite ok para inserir novas linguagens`
// );

// while (outrasOpcoes == "ok") {
//   outrasOpcoes = `${novaLinguagem} é muito interesante. Mais alguma?`;
//   outrasOpcoes++;
// }
