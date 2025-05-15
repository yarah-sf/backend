class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }
    exibirDetalhes(){
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.endereco}`
    }
}

let carro = new Veiculo('Toyota', 'Corola', 2022);
console.log(carro.exibirDetalhes());

console.log('----------------------');

let motocicleta = new Veiculo('Honda', 'CBR 600RR', 2021);
console.log(motocicleta.exibirDetalhes());