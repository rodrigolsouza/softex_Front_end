
let animais = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 12],
    ["Girafa", "Mamífero", 8],
    ["Pinguim", "Ave", 3],
    ["Cobra", "Réptil", 4]
];


let terceiroAnimal = animais[2]; // Isso retornará ["Girafa", "Mamífero", 8]

// Imprimir informações de todos os animais
for (let i = 0; i < animais.length; i++) {
    let animal = animais[i];
    console.log(`Animal ${i + 1}: Nome: ${animal[0]}, Espécie: ${animal[1]}, Idade: ${animal[2]} anos`);
}