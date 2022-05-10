// 2 - Se Front-End: - React
//                    - Vue
//     Se Back-End:  - C#
//                   - Java

// 3 - Por último: - seguir se especializando
//                 - se tornar fullstack

// 4 - Inserir quantas tecnologias quiser

const prompt = require("prompt-sync")();

const question = prompt(
  `Qual é a área de desenvolvimento que você deseja seguir?`
);

const frontEnd = 1;
const backEnd = 2;

const answer = prompt(
  `Responda número ${frontEnd} para Front-End e número ${backEnd} para Back-End`
);

let message;

if (answer == frontEnd) {
  message = `Você se interessa por Front-end! Um Front-End developer cria websites e aplicativos utilizando web linguagens como: HTML, CSS E JavaScript.`;
} else if (answer == backEnd) {
  message = `Você se interessa por Back-end! Um desenvolvedor de back-end é um desenvolvedor de software especializado na criação de funções do lado do servidor do software. Eles geralmente trabalham com linguagens de programação como Python, C, PHP, Java e Ruby.`;
}

console.log(message);
