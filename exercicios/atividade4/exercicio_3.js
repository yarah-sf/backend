import entradaDados from 'readline-sync'

let num1 = entradaDados.questionInt('Informe um valor: ')
let num2 = entradaDados.questionInt('Informe um outro valor: ')
let operacao = entradaDados.question('Operação a ser feita ( + - * /): ')

switch (operacao) {
    case '+':
        console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
        break
    case '-':
        console.log(`Resultado: ${num1} + ${num2} = ${num1 - num2}`);
        break
    case '*':
        console.log(`Resultado: ${num1} + ${num2} = ${num1 * num2}`);
        break
    case '/':
        console.log(`Resultado: ${num1} + ${num2} = ${num1 / num2}`);
        break
    default:
        console.log('Valor ou operação invalido, tente novamente')
    
}
