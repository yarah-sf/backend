import entradaDados from 'readline-sync'

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
