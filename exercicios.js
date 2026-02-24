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

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
  console.log(`${ano} é bissexto`);
} else {
  console.log(`${ano} não é bissexto`);
}
