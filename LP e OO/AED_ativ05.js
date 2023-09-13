/*Para encontrar o valor 20 no array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7], a busca binária é a abordagem mais eficiente, mas ela requer que o array esteja ordenado. Como o array não está ordenado, a busca linear será mais apropriada.*/

function buscaLinear(array, elemento) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        return i; // Retorna o índice se encontrado
      }
    }
    return -1; // Retorna -1 se não encontrado
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const elemento = 20;
  
  const resultado = buscaLinear(array, elemento);
  
  if (resultado !== -1) {
    console.log(`O elemento ${elemento} foi encontrado no índice ${resultado}.`);
  } else {
    console.log(`O elemento ${elemento} não foi encontrado no array.`);
  }