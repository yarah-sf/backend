import entradaDados from 'readline-sync'

let frase = entradaDados.question('Texto a ser convertido: ');

//declaração de função
function Maiusculas (frase) {
    return frase.toUppercase();
}

//Expressão de função
const cxAlta = function(frase) {
    return frase.toUppercase();
}

//Arrow function
const tdmaiusculo = (frase) => frase.toUppercase;
console.log(tdmaiusculo(frase));