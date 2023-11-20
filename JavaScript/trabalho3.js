
let Banco = {
    numeroDaConta: 123456,
    tipoDeConta: 'Corrente',
    saldoDaConta: 2000,

    buscarSaldo: function() {
        return this.saldoDaConta;
    },

    
    saque: function(valor) {
        if (valor <= this.saldoDaConta) {
            this.saldoDaConta -= valor;
            return `Saque de R$${valor} realizado com sucesso. Seu saldo atual é R$${this.saldoDaConta}.`;
        } else {
            return 'Saldo insuficiente para realizar o saque.';
        }
    },

    
    deposito: function(valor) {
        this.saldoDaConta += valor;
        return `Depósito de R$${valor} realizado com sucesso. Seu saldo atual é R$${this.saldoDaConta}.`;
    }
};

// exibindo as respostas
console.log(Banco.buscarSaldo()); 
console.log(Banco.saque(200)); 
console.log(Banco.deposito(300));
console.log(Banco.buscarSaldo()); 



// outra maneira de fazer, com construtor:

function BancoR(numeroDaConta, tipoDeConta, saldoDaConta) {
    this.numeroDaConta = numeroDaConta;
    this.tipoDeConta = tipoDeConta;
    this.saldoDaConta = saldoDaConta;

    
    this.buscarSaldo = function() {
        return this.saldoDaConta;
    };

    
    this.saque = function(valor) {
        if (valor <= this.saldoDaConta) {
            this.saldoDaConta -= valor;
            return `Saque de R$${valor} realizado com sucesso. Seu saldo atual é R$${this.saldoDaConta}.`;
        } else {
            return 'Saldo insuficiente para realizar o saque.';
        }
    };

    
    this.deposito = function(valor) {
        this.saldoDaConta += valor;
        return `Depósito de R$${valor} realizado com sucesso. Seu saldo atual é R$${this.saldoDaConta}.`;
    };
}


let minhaConta = new BancoR(123456, 'Corrente', 2000);


//exibindo as respostas

console.log(minhaConta.buscarSaldo());
console.log(minhaConta.saque(200));
console.log(minhaConta.deposito(300));
console.log(minhaConta.buscarSaldo());
