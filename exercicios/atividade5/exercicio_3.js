import entradaDados from 'readline-sync'


const numAle = Math.floor(Math.random()*100) + 1;
let palpite;

do {
    palpite = entradaDados.questionInt('Tente adivinhar o numero sorteado (1 - 100): ');
    if (palpite === numAle) {
        console.log('Parabens! Você acertou. ')
    } else if(palpite < numAle) {
        console.log('Tente um número maior.')
    }
    else {
        console.log('Tente Um número menor.')
    }
} while (palpite !== numAle);