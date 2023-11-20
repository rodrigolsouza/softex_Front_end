
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

try {
  
  let resultado = num1 * num2;

  // Lança uma exceção se o resultado for NaN
  if (isNaN(resultado)) {
    throw new Error("A operação resultou em um valor inválido.");
  }

 
  console.log("Resultado da operação:", resultado);
} catch (error) {
  // Captura e trata a exceção
  console.error("Erro:", error.message);
} finally {
  
  console.log("Fim da execução.");
}
