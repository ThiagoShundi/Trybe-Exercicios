//Parte 1 - Exercício 1.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// console.log("Boas Vindas, " + info.personagem);

//Parte 1 - Exercício 2.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// info.recorrente = "Sim";

// console.log(info);

//Parte 1 - Exercício 3.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// for (let index in info) {
//   console.log(index);
// }

//Parte 1 - Exercício 4.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// for (let index in info) {
//   console.log(info[index]);
// }

//Parte 1 - Exercício 5.

// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "Sim",
// };

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };

// for (let properties in info) {
//   if (
//     properties === "recorrente" &&
//     info[properties] === "Sim" &&
//     info2[properties] === "Sim"
//   ) {
//     console.log("Ambos recorrenteeeees");
//   } else {
//     console.log(info[properties] + " e " + info2[properties]);
//   }
// }

//Parte 1 - Exercício 6.

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };

// console.log(
//   "O livro favorito de " +
//     leitor.nome +
//     leitor.sobrenome +
//     " se chama " +
//     leitor.livrosFavoritos[0].titulo
// );

//Parte 1 - Exercício 7.

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };

// leitor.livrosFavoritos.push({
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editora: "Rocco",
// });

// console.log(leitor.livrosFavoritos);

//Parte 1 - Exercício 8.

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };

// leitor.livrosFavoritos.push({
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editora: "Rocco",
// });

// console.log(
//   leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoristos"
// );

//Parte 2 - Exercício 1.

// let reverse = "";

// function verificaPalindrome(word) {
//   for (let index = 0; index < word.length; index += 1) {
//     reverse = reverse + word[word.length - 1 - index];
//   }

//   if (reverse === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome("arara"));
// console.log(verificaPalindrome("desenvolvimento"));

//Parte 2 - Exercício 1.2.

// function verificaPalindrome(word) {
//   for (index in word) {
//     if (word[index] != word[word.length - 1 - index]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(verificaPalindrome("arara"));
// console.log(verificaPalindrome("desenvolvimento"));

//Parte 2 - Exercício 1.3.

// function verificaPalindrome(string) {
//   let reverse = string.split("").reverse().join("");
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome("arara"))
// console.log(verificaPalindrome("desenvolvimento"))
