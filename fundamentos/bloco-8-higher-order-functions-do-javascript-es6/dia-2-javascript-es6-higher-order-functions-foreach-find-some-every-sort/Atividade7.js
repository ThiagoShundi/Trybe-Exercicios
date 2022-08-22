const people = [
    { name: 'Mateus', age: 15 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people.sort((personA, personB) => personA.age - personB.age); //Crescente

//   people.sort((personA, personB) => personB.age - personA.age); //Descrescente

  console.log(people);