const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- CARA O CRUZ ---");

function iniciarJuego() {
  readline.question("\n¿Cara o cruz?: ", (eleccion) => {
    // Generar 0 o 1 aleatoriamente
    const resultadoAleatorio = Math.floor(Math.random() * 2);
    
    // TERNARIO 1: Definir el resultado
    const resultadoMoneda = (resultadoAleatorio === 0) ? "cara" : "cruz";
    
    console.log(`La moneda cayó en: ${resultadoMoneda}`);

    // Validar si ganó
    if (eleccion.toLowerCase() === resultadoMoneda) {
      console.log("¡Felicidades, ganaste!");
      readline.close(); // Si gana, el juego termina
    } else {
      console.log("Perdiste.");
      
      // Preguntar si quiere volver a intentar
      readline.question("¿Quieres volver a intentarlo? (si/no): ", (reintentar) => {
        if (reintentar.toLowerCase() === "si" || reintentar.toLowerCase() === "s") {
          iniciarJuego(); // LLAMADA RECURSIVA: Reinicia el juego
        } else {
          console.log("Gracias por jugar. ¡Adiós!");
          readline.close();
        }
      });
    }
  });
}

// Primera ejecución del juego
iniciarJuego();