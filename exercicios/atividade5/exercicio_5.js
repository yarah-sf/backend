import entradaDados from 'readline-sync'

let totalImposto = 0;

for (let i = 1; i < 10; i++ ) {
    let nome = entradaDados.question(`Nome da ${i}ª pessoa: `);
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

    console.log(`\nIposto a ser pago`);
    console.log(`Nome ${nome} \nImposto de renda: R$ ${imposto.toFixed(2)}`);
}