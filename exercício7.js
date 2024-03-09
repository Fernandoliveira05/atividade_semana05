// Classe animal
class Animal {
    // Atributos da classe 
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método descrever, com a finalidade de imprimir ao usuário o seu nome e sua idade
    descrever() {
        console.log(`Olá! Sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Definindo objetos para a classe
const cachorro = new Animal("Apollo", 9);
const gato = new Animal("Marie", 1);

// Chamando os métodos
cachorro.descrever();
gato.descrever();
