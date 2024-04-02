// Function to create a queue
function criarFila(tamanho = 5) {
  // Create an array with default values
  const fila = Array(tamanho).fill(undefined);
  let inicio = 0;
  let fim = 0;
  let tamanhoAtual = 0;

  // Function to insert an item into the queue
  function inserirFila(item) {
    if (!item || !fila) {
      console.error("Error: Invalid parameters");
      return;
    }

    // Check if the queue is full
    if (tamanhoAtual === tamanho) {
      console.error("Error: Queue is full");
      return;
    }

    // Insert the item at the end of the queue
    fila[fim] = item;
    fim = (fim + 1) % tamanho;
    tamanhoAtual++;
  }

  // Function to remove an item from the queue
  function removerFila() {
    if (!fila) {
      console.error("Error: Invalid queue");
      return;
    }

    if (tamanhoAtual === 0) {
      console.error("Error: Queue is empty");
      return;
    }

    // Remove the item at the beginning of the queue
    const item = fila[inicio];
    inicio = (inicio + 1) % tamanho;
    tamanhoAtual--;

    return item;
  }

  // Function to empty the queue
  function esvaziarFila() {
    if (!fila) {
      console.error("Error: Invalid queue");
      return;
    }

    if (tamanhoAtual === 0) {
      console.error("Error: Queue is already empty");
      return;
    }

    // Set all values to undefined
    fila.fill(undefined);
    inicio = 0;
    fim = 0;
    tamanhoAtual = 0;
  }

  // Function to check the size and contents of the queue
  function verTamanhoFila() {
    if (!fila) {
      console.error("Error: Invalid queue");
      return;
    }

    const emptySpaces = tamanho - tamanhoAtual;
    const subQueue = fila.slice(inicio, fim);

    return {
      emptySpaces,
      usedSpaces: tamanhoAtual,
      size: tamanho,
      subQueue,
    };
  }

  return {
    inserirFila,
    removerFila,
    esvaziarFila,
    verTamanhoFila,
    fila,
    tamanho,
    inicio,
    fim,
    tamanhoAtual,
  };
}

// Example usage:
const minhaFila = criarFila();
minhaFila.inserirFila("musical");
minhaFila.inserirFila("musica2");
console.log(minhaFila.verTamanhoFila());
// Output: { emptySpaces: 3, usedSpaces: 2, size: 5, subQueue: [ 'musical', 'musica2' ] }
