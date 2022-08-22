// Ao chamar a função doingThings:


const wakeUp = () => "Acordando!!"

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!