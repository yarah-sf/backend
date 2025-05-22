import entradaDados from 'readline-sync'

let categoria = entradaDados.question('Categoria de bonificação (A, B, C, D): ').toUpperCase()
let salarioatual = entradaDados.questionInt('Salário Atual: ')
let bonus = 0

switch (categoria) {
    case 'A':
        bonus = salarioatual * 0.05;
        console.log(`Novo Salário: ${(salarioatual + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'B':
        bonus = salarioatual * 0.10;
        console.log(`Novo Salário: ${(salarioatual + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'C':
        bonus = salarioatual * 0.15;
        console.log(`Novo Salário: ${(salarioatual + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'D':
        bonus = salarioatual * 0.20;
        console.log(`Novo Salário: ${(salarioatual + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    default:
        ('Valores inválidos')
}