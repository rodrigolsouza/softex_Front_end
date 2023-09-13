class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null; // Referência ao filho
    }
}


const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 35);
const pessoa3 = new Pessoa("Carol", 25);

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;


console.log("Nome: " + pessoa1.nome + ", Idade: " + pessoa1.idade);
console.log("Nome: " + pessoa2.nome + ", Idade: " + pessoa2.idade);
console.log("Nome: " + pessoa3.nome + ", Idade: " + pessoa3.idade);


console.log("Filho de " + pessoa1.nome + " é " + pessoa1.filho.nome);
console.log("Filho de " + pessoa2.nome + " é " + pessoa2.filho.nome);