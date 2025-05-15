let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletronicos',
    peso: 1.5,
    preco: 3500.00
}

console.log (`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}, está a venda por ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}.`)