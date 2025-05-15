class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}`
    }
}

let casa = new Imovel(3, 'Sobrado', 'Av. Principal, 456 - Centro.' );
console.log(casa.exibirInformacoes());

let ap = new Imovel(2, 'Apartamento', 'Avenida da Paz, 123 - Centro' );
console.log(ap.exibirInformacoes());


//console.log(`Quartos: ${casa.quartos} \nTipo: ${casa.tipo} \nEndereço: ${casa.endereco}`)