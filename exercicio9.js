// Criando a classe Somador de Nota
class SomadorDeNotas {
    constructor(total){
        this.total = 0;
    }
    // Método chamar nota, que soma as notas no total diretamente
    adicionarNotas(nota){
        this.total += nota;
    }

    // Método ver total mostra no console o total das notas
    verTotal(){
        console.log(`Sua notas somadas resultam em: ${this.total}`)
    }
}

// Definindo o somador como um novo objeto da classe somador de notas
let somador = new SomadorDeNotas();

// Adicionando nossas notas
somador.adicionarNotas(9.5);
somador.adicionarNotas(9);
somador.adicionarNotas(10);
somador.adicionarNotas(8.5);

// Imprimindo no console o resultado
somador.verTotal();