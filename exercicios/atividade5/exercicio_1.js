import entradaDados from 'readline-sync'

let num = entradaDados.questionInt('Informe um numero: ');
let tab = 0;

while (tab <= 10) {
    console.log(`${num} x ${tab} = ${num * tab}`);
    tab++;
}