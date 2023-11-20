
let valor1 = parseFloat(prompt("Insira o primeiro valor:"));
let valor2 = parseFloat(prompt("Insira o segundo valor:"));
let operador = prompt("Insira o operador (+, -, *, /):");

let resultado;
let sobra;
switch (operador) {
    case '+':
        resultado = valor1 + valor2;
        break;
    case '-':
        resultado = valor1 - valor2;
        break;
    case '*':
        resultado = valor1 * valor2;
        break;
    case '/':
        resultado = valor1 / valor2;
        sobra = valor1 % valor2;
        break;
    default:
        console.log("Operador inválido.");
        break;
}


if (operador === '/') {
    console.log("O resultado da operação é: " + resultado + " e a sobra é: " + sobra);
} else if (resultado !== undefined) {
    console.log("O resultado da operação é: " + resultado);
}
