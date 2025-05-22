import entradaDados from 'readline-sync';

let dia = entradaDados.question('informe um dia da semana (1-7): ')

switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-Feira');
        break;
    case 3:
        console.log('Terça-Feira');
        break;
    case 4:
        console.log('Quarta-Ferira');
        break;
    case 5:
        console.log('Quinta-Feira');
        break;
    case 6:
        console.log('Sexta-Feira');
        break;
    case 7:
        console.log('Sabado');
        break;
    default:
        console.log('Valor Inválido')
}