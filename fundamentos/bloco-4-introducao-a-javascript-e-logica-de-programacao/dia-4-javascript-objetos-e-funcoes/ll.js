function generatePhoneNumber(numbers) {
  let soma = 0;

  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] >= 10) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (const value of numbers) {
      if (numbers[index] === value) {
        soma += 1;
      }
    }
    if (soma >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      soma = 0;
    }
  }
  return (
    "(" +
    numbers[0] +
    numbers[1] +
    ") " +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    "-" +
    numbers[7] +
    numbers[8] +
    numbers[9] +
    numbers[10]
  );
}

console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));

// function generatePhoneNumber(phoneNumber) {
//   let seRepete = 0;
//   if (phoneNumber.length !== 11) {
//     return "Array com tamanho incorreto.";
//   }
//   for (let index = 0; index < phoneNumber.length; index++) {
//     if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//     for (const value of phoneNumber) {
//       if (phoneNumber[index] === value) {
//         seRepete++;
//       }
//     }
//     if (seRepete >= 3) {
//       return "não é possível gerar um número de telefone com esses valores";
//     } else {
//       seRepete = 0;
//     }
//   }

//   return (
//     "(" +
//     phoneNumber[0] +
//     phoneNumber[1] +
//     ") " +
//     phoneNumber[2] +
//     phoneNumber[3] +
//     phoneNumber[4] +
//     phoneNumber[5] +
//     phoneNumber[6] +
//     "-" +
//     phoneNumber[7] +
//     phoneNumber[8] +
//     phoneNumber[9] +
//     phoneNumber[10]
//   );
// }

// console.log(generatePhoneNumber([3, 2, 5, 9, 7, 0, 7, 4, 0, 6, 1]));
