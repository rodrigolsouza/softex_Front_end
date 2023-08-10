const rodas = console.log(prompt("Digite o número de rodas do seu veículo: "));
parseInt(rodas);
const pesoVeiculo = console.log(prompt("Digite o peso do seu veículo em Kg: "));
parseInt(pesoVeiculo);
const capacidade = console.log(prompt("Digite a capacidade máxima de pessoas que seu veículo transporta:"));
parseInt(capacidade);

let categoria = "";

if (rodas === 2 || rodas === 3) {
  categoria = "A";
} else if (rodas === 4 && capacidade <= 8 && pesoVeiculo < 3500) {
  categoria = "B";
} else if (rodas >= 4 && pesoVeiculo >= 3500 && pesoVeiculo <= 6000) {
  categoria = "C";
} else if (rodas >= 4 && capacidade > 8) {
  categoria = "D";
} else if (rodas >= 4 && pesoVeiculo > 6000) {
  categoria = "E";
} else {
  console.log("opção inválida! Digite um número válido");
}
console.log(
  prompt(`A melhor categoria que seu veículo se encaixa é: ${categoria}`)
);
