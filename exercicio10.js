// Criando a classe mãe, onde estarão nossos funcionários. Estou definindo nome, idade e salário base como atributos.
class Funcionário{
    // Método construtor
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        // Defini um salário base para todos os funcionários
        this.salarioBase = 4580;
    }
    // Criando o método de cálculo de salário. Como o salário para os demais funcionários é o mesmo, não precisei criar nenhuma lógica além dessa. Mas essa linha será utilizada no cálculo do salário do professor, que por sua vez é mais complexa.
    calcularSalario(){
        this.salarioBase = salarioBase;
    }
    // Imprime para o usuário as informações adquiridas 
    informacoes_funcionario(){
        console.log(`Olá! Em nosso sistema consta que seu nome é ${this.nome}, sua idade é ${this.idade}, seu salário atualmente é de R$${this.salarioBase}`)
    }

}

// Classe dos professores, que herda atributos da classe funcionários
class Professor extends Funcionário{
    constructor(nome, idade, salarioBase, disciplina, horasSemanais){
        // Herdando atributos 
        super(nome, idade, salarioBase)
        this.disciplina = disciplina;
        this.horasSemanais = horasSemanais;
    }
    // Método para calcular salário dos professores com base em sua carga horária semanal. Aqui a lógica é bem simples! O salário do professor é a sua carga semanal multiplicada pela carga horária. Claramente os valores definidos mais acima são irreais no cenário brasileiro, mas serviram muito bem pro exemplo.
    calcularSalario(){
        this.salarioProfessor = this.horasSemanais * this.salarioBase
        // Imprimindo ao usuário o total de seus ganhos mensais
        console.log(`Olá! ${this.nome}, seu salário mensal é de R$${this.salarioProfessor} mensais.`)
    }
    // Imprime as informações do professor, que por sua vez tem mais informações que o funcionário
    informacoes_professor(){
        console.log(`Olá, mestre! Em nosso sistema consta que seu nome é ${this.nome}, sua idade é ${this.idade}, você dá aulas de ${this.disciplina} e sua carga semanal atual é de ${this.horasSemanais} horas`)
    }
}

// Criando os objetos de professor
const professor1 = new Professor ("Josué", "26", this.salarioBase, "português", "40")
const professor2 = new Professor ("Ricardo", "42", this.salarioBase, "matemática", "30")

// Chamando nossos métodos, para verificarmos diretamente no console.log se o exercício deu certo
professor1.informacoes_professor()
professor2.informacoes_professor()
professor1.calcularSalario()
professor2.calcularSalario()
