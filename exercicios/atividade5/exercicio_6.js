import entradaDados from 'readline-sync'


const pessoa = {
    nome: "Yarah",
    idade: 16,
    sexo: "F"
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}