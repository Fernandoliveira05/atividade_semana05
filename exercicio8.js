// Criando a classe animal
class Animal {
    // Criando seus atributos
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

     // Método descrever, com a finalidade de imprimir ao usuário o seu nome e sua idade
    descrever() {
        console.log(`Olá! Sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Criando a classe gato, que herda atributos de animal
class Gato extends Animal{
    constructor(nome, idade, cor){
    // Herdando caracteristica da classe mãe, animal
    super(nome, idade)
    // Criando um atributo próprio da classe
    this.cor = cor
    }

    // Criando um método 'miar', que imprime o miado do gato
    miar(){
        console.log('meow!');
    }
    // Método descrever, com a finalidade de imprimir ao usuário o nome do gatinho, sua idade e sua cor. Precisamos criar um novo, pois agora temos uma caracteristica não presente anteriormente
    descrever() {
        console.log(`Olá! Sou ${this.nome} e tenho ${this.idade} anos, sou ${this.cor}.`);
    }
}

// Criando nossos objetos para a classe animal e gato
let cachorro = new Animal("Apollo", 9);
let gato = new Gato("Marie", 1, "preto");

// Chamando nossos métodos
cachorro.descrever();
gato.descrever();
gato.miar();
