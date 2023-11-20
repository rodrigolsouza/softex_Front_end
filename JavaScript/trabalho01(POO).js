let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    ligar: function() { console.log('Carro ligado'); },
    desligar: function() { console.log('Carro desligado'); },
    buzinar: function() { console.log('Beep beep!'); }
  };

  let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    paginas: 1200,
    abrir: function() { console.log('Livro aberto'); },
    fechar: function() { console.log('Livro fechado'); },
    ler: function() { console.log('Lendo o livro'); }
  };

  let curso = {
    nome: 'JavaScript para Iniciantes',
    duracao: '5 horas',
    concluido: false,
    iniciar: function() { console.log('Curso iniciado'); },
    pausar: function() { console.log('Curso pausado'); },
    concluir: function() { this.concluido = true; console.log('Curso concluído'); }
  };

  let contaBancaria = {
    numero: 123456,
    saldo: 1000.00,
    titular: 'João Silva',
    depositar: function(valor) { this.saldo += valor; console.log('Depósito realizado'); },
    sacar: function(valor) { this.saldo -= valor; console.log('Saque realizado'); },
    consultarSaldo: function() { console.log('Saldo atual: ' + this.saldo); }
  };
  