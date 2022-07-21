//Exercicio 1.

//const a = 2;
//const b = 3;

//console.log('Soma:' + (a+b));
//console.log('Subtração:' + (a-b));
//console.log('Multiplicação:' + (a * b));
//console.log('Divisão:' + (a / b));
//console.log('Módulo:' + (a % b));

//Exercicio 2.

//const a = 5;
//const b = 3;

//if (a > b) {
//    console.log ('O maior número é:' + (a) + '.')
//}

//else if (b > a) {
//    console.log ('O maior número é:' + (b) + '.')
//}

//else {
//    console.log ('Os números são iguais:' + (a) + '.')
//};

//Exercicio 3.

//const a = 5;
//const b = 4;
//const c = 3;

//if (a > b && a > c) {
//    console.log ('O maior número é:' + (a) + '.')
//}

//else if (b > a && b > c) {
//    console.log ('O maior número é:' + (b) + '.')
//}

//else {
//   console.log ('O maior número é:' + (c) + '.')
//};

//Exercicio 4.

//const numero = 0;

//if (numero > 0) {
//    console.log ('Positivo')
//}

//else if (numero < 0) {
//    console.log ('Negativo')
//}

//else {
//    console.log ('Zero')
//}

//Exercicio 5.

//let a = 80;
//let b = 60;
//let c = -30;

//let soma = a + b + c;

//if (a > 0 && b > 0 && c > 0) {
//    if(soma === 180) {
//        console.log('Verdadeiro')
//    }
//    else {
//        console.log('Falso')
//    };
//}

//else {
//    console.log('Angulo Inválido')
//};

//Exercicio 6.

//let peca = 'torre'

//switch (peca.toLowerCase()) {
//    case 'rei':
//        console.log ('Rei -> Andar 1 casa em qualquer direção')
//    break
//    case 'rainha':
//        console.log ('Rainha -> Andar n casa em qualquer direção')
//    break
//    case 'bispo':
//        console.log ('Bisco -> Andar n casa em diagonal')
//    break
//    case 'cavalo':
//        console.log ('Cavalo -> Andar em L')
//    break
//    case 'torre':
//        console.log ('Torre -> Andar n casa na vertical ou horizonal')
//    break   
//default:
//    console.log ('Peça Inválida')
//};

//Exercicio 7.

//let porcent = '48'

//if (porcent < 0 || porcent > 100) {
//    console.log ('Nota inválida')
//}
//else if (porcent >= 90) {
//    console.log ('A')
//}
//else if (porcent >= 80) {
//    console.log ('B')
//}
//else if (porcent >= 70) {
//    console.log ('C')
//}
//else if (porcent >= 60) {
//    console.log ('D')
//}
//else if (porcent >= 50) {
//    console.log ('E')
//}
//else {
//    console.log ('F')
//}

//Exercicio 8.

//const a = '53';
//const b = '5';
//const c = '33';

//let isEven = false;

//if (a%2 === 0 || b%2 === 0 || c%2 === 0) {
//    isEven = true;
//}
//    console.log (isEven);

//Exercicio 9.

//const a = '50';
//const b = '2';
//const c = '30';

//let isOdd = false;

//if (a%2 !== 0 || b%2 !== 0 || c%2 !== 0) {
//    isOdd = true;
//}
//    console.log (isOdd);


//Exercicio 10.

//let valorCusto = 500;
//let valorVenda = 1200;

//let valorImposto = valorCusto * 1.2;
//let lucro = (valorVenda - valorImposto)*1000;

//if (valorCusto < 0 || valorVenda < 0) {
//    console.log ('Valores Inválidos')
//}
//else {
//    console.log (lucro)
//}

//Exercicio 11.


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));



















