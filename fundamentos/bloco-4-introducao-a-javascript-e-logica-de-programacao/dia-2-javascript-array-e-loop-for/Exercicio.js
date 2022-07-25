//Exercício 1.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index+= 1) {
//    console.log (numbers[index])
//}

//Exercício 2.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;

//for (let index = 0; index < numbers.length; index+= 1) {
//   soma = soma + numbers[index];
//}

//console.log (soma)

//Exercício 3.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;

//for (let index = 0; index < numbers.length; index+= 1) {
//   soma = soma + numbers[index];
//}

//console.log (soma/numbers.length);

//Exercício 4.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let soma = 0;

//for (let index = 0; index < numbers.length; index+= 1) {
//   soma = soma + numbers[index];
//}

//let mediaAri = soma/numbers.length;

//if (mediaAri > 20) {
//    console.log('Valor Maior que 20')
//}
//else {
//    console.log('Valor Menor ou igual que 20')
//}

//Exercício 5.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maior = numbers[0];

//for (index = 0; index < numbers.length; index+=1) {
//    if (numbers[index] > maior) {
//        maior = numbers[index];
//      }
//}

//console.log (maior);

//Exercício 6.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let impar = 0

//for (index = 0; index < numbers.length; index+=1) {
//    if (numbers[index]%2  !== 0) {
//        impar +=1
//       }

// }

// if (impar === 0) {
//     console.log ('Nenhum valor impar encontrado!');
// }
// else {
//    console.log (impar);
// }    e

//Exercício 7.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let menor = numbers[0];

//for (index = 0; index < numbers.length; index += 1) {
//  if (numbers[index] < menor) {
//    menor = numbers[index];
//  }
//}

//console.log(menor);

//Exercício 8.

//let numbers = [];

//for (index = 0; index < 25; index += 1) {
//  numbers.push(index);
//}

//console.log(numbers);

//Exercício 9.

//let numbers = [];

//for (index = 0; index < 25; index += 1) {
//  numbers.push(index / 2);
//}

//console.log(numbers);

//Exercício 9.1.

let numbers = [];

for (index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
  console.log(numbers[index1] / 2);
}

//Bonus 1.
