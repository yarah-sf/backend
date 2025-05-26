import entradaDados from 'readline-sync'

/*
WHILE
_1_
let num = entradaDados.questionInt('Informe um numero: ');
let tab = 1;

while (tab <= 10) {
    console.log(`${num} x ${tab} = ${num * tab}`);
    tab++;
}
*/


/*
WHILE
_2_
let numAlun = entradaDados.questionInt('Numero de alunos da turma: ');
let contAlun = 1;
let somaMedias = 0;

while (contAlun <= numAlun) {
    console.log(`Aluno ${contAlun}`);

    let contBimes = 1;
    let somaNotas = 0

    while (contBimes <= 4) {
        let nota = entradaDados.questionInt(`Ìnforme a nota do ${contBimes}° bimestre do aluno ${contAlun}: `)
        somaNotas += nota;
        contBimes ++;
    }
    let mediaAlun = somaNotas / 4;
    somaMedias += mediaAlun;
    console.log(`Media do aluno: ${contAlun}: ${mediaAlun.toFixed(2)}`);
    contAlun ++
}

let mediaTurma = somaMedias / numAlun;
console.log(`Média geral da turma: ${mediaTurma.toFixed(2)}`);
*/

/*
DO WHILE
_1_
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

/*
FOR
_1_ 
let anterior = 0;
let atual = 1;

console.log('----Sequência Fibonacci----');
console.log(anterior);
console.log(atual);

for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;
    console.log(proximo);

    anterior = atual;
    atual = proximo;
}
*/

/*
FOR
_2_
let totalImposto = 0;

for (let i = 1; i < 10; i++ ) {
    let nome = entradaDados.question(`Nome da ${i + 1}ª pessoa: `);
    let salario = entradaDados.questionFloat(`Salário bruto R$: `);
    let imposto = 0;

    if (salario <= 2100) {
        imposto = 0;
    } else if  (salario <= 2800) {
        imposto = salario * 0.075;
    } else if (salario <= 3750) {
        imposto = salario * 0.15;
    } else if (salario <= 4660) {
        imposto = salario * 0.225;
    } else if (salario > 4660) {
        imposto = salario * 0.275;
    }

    console.log(`\nIposta a ser pago`);
    console.log(`Nome ${nome} \nImposto de renda: R$ ${imposto.toFixed(2)}`);
}*/

/*
FOR IN e FOR OF
_1_
const pessoa = {
    nome: "Yarah",
    idade: 16,
    sexo: "F"
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

_2_
let cores = ['Azul', 'Verde', 'Amarelo'];

for (const elemento of cores) {
    console.log(`Cor: ${elemento}`);
}
*/
