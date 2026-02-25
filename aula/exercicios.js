//IF/ELSE
//definir um fluxo para somar ou multiplicar dois números usando if/else.
const num1 = 2;
const num2 = 4;
const operacao = "multiplicação";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "multiplição") {
  console.log(num1 * num2);
} else {
  console.log("operação não identificada");
}

// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $ 6999 a $4008: 7% de bônus
// $3999 p baixo: 9% de bônus

const salarіо = 11000;

if (salarіо >= 11000) {
  console.log("3% de bônus");
} else if (salarіо < 11000 && salarіо >= 7000) {
  console.log("5% de bônus");
} else if (salarіо < 7000 && salarіо >= 4000) {
  console.log("7% de bônus");
} else {
  console.log("9% de bônus");
}

//OPERADORES

/* 
verificar se um ano é bisssexto 
um ano é bissexto quando: 
deve ser divisível por 4 mas NÃO divisível por 100. 
OU 
deve ser divisível por 100 e por 400 
*/

const ano = 1995;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`${ano} é bissexto`);
} else {
  console.log(`${ano} não é bissexto`);
}

// Operador ternário/ operador condicional

// function saudar(nome) {
//   console.log(`olá ${nome}`);
// }
// nome ? saudar(nome) : saudar(pessoa);
// const nome = "Jeferson";
// const saudacao = nome ? `olá ${nome}` : `olá pessoa`;
// console.log(saudacao);

// SWITCH /CASE
const avaliacao = 2;
switch (avaliacao) {
  case 5:
    console.log("avaliação ótima");
    break;
  case 4:
    console.log("avaliação boa");
    break;
  case 3:
    console.log("avaliação neutra");
    break;
  default:
    console.log("avaliação baixa");
    break;
}

//OP CONDICIONAL E SWITCH
// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nomeAlu = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus =
  nota >= 8 && faltas <= 2
    ? `${nomeAlu} recebe bônus`
    : `${nomeAlu} não recebe bônus`;

console.log(recebeBonus);

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = "premium";

switch (user) {
  case "free":
    console.log("Acesso limitado");
    break;
  case "premium":
    console.log("Acesso total ao app");
    break;
  case "super premium":
    console.log("Acesso total ao app e bônus");

    break;

  default:
    console.log("tipo de user desconhecido");

    break;
}
