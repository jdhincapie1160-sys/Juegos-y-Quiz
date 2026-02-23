const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Selección de 5 preguntas clave con 4 opciones cada una
const preguntas = [
  {
    pregunta: "1️⃣ ¿Qué resultado produce este código?\n   let x = '5' + 3;",
    opciones: "a) 8\nb) '8'\nc) '53'\nd) Error",
    correcta: "c"
  },
  {
    pregunta: "2️⃣ ¿Cuál es el resultado de la expresión?\n   5 + 2 * 3",
    opciones: "a) 21\nb) 11\nc) 15\nd) 16",
    correcta: "b"
  },
  {
    pregunta: "3️⃣ ¿Qué devuelve esta expresión?\n   10 == '10'",
    opciones: "a) false\nb) true\nc) Error\nd) undefined",
    correcta: "b"
  },
  {
    pregunta: "4️⃣ ¿Cuál es el resultado?\n   5 > 3 && 2 < 4",
    opciones: "a) true\nb) false\nc) 1\nd) Error",
    correcta: "a"
  },
  {
    pregunta: "5️⃣ ¿Cuál es el valor final de x?\n   let x = 3;\n   let y = 2;\n   x = x + y;\n   y = x * y;\n   x = y - x;",
    opciones: "a) 1\nb) 4\nc) 5\nd) 6",
    correcta: "c"
  }
];

let puntos = 0;
let indicePregunta = 0;

function lanzarPregunta() {
  if (indicePregunta < preguntas.length) {
    const p = preguntas[indicePregunta];
    
    console.log(`\n--- PREGUNTA ${indicePregunta + 1} ---`);
    console.log(p.pregunta);
    console.log(p.opciones);

    readline.question("\nTu respuesta (a, b, c o d): ", (respuesta) => {
      const respLimpia = respuesta.trim().toLowerCase();

      if (respLimpia === p.correcta) {
        console.log("✅ ¡Respuesta correcta! +10 puntos.");
        puntos += 10;
      } else {
        console.log(`❌ Incorrecto. La respuesta era la '${p.correcta}'.`);
      }

      indicePregunta++;
      lanzarPregunta(); 
    });
  } else {
    // Lógica de ganar o perder (Umbral de 30 puntos)
    console.log("\n================================================");
    console.log(`PUNTAJE FINAL: ${puntos} / 50`);
    
    if (puntos > 30) {
      console.log("🏆 ¡FELICIDADES, GANASTE EL QUIZ!");
      console.log("Has demostrado un gran dominio de la lógica.");
    } else {
      console.log("💀 PERDISTE...");
      console.log("Tu puntaje fue menor a 30. ¡Sigue practicando!");
    }
    console.log("================================================\n");
    
    readline.close();
  }
}

console.log("¡Bienvenido al Desafío Final de JavaScript!");
console.log("Reglas: Cada pregunta vale 10 puntos. Necesitas un puntaje igual o mayor a 30 para ganar.");
lanzarPregunta();