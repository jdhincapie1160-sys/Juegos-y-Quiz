const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables del juego
let puntosJugador = 0;
let puntosDealer = 0;
let ronda = 1;

console.log("\n========================================");
console.log("    🃏 EL BLACKJACK DEL AZAR 🃏");
console.log("========================================\n");

function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function turnoDealer() {
    console.log("\n--- 🤵 TURNO DEL DEALER (LA CASA) ---");
    // El dealer sigue reglas de casino: pide hasta llegar a 17
    while (puntosDealer < 17) {
        const carta = obtenerCarta();
        puntosDealer += carta;
        console.log(`La Casa sacó: ${carta} | Total Dealer: ${puntosDealer}`);
    }

    determinarGanador();
}

function determinarGanador() {
    console.log("\n========================================");
    console.log(`   PUNTUACIÓN FINAL:`);
    console.log(`   Tú: ${puntosJugador} pts`);
    console.log(`   La Casa: ${puntosDealer} pts`);
    console.log("========================================");

    if (puntosDealer > 21) {
        console.log("🏆 ¡LA CASA SE PASÓ! ¡ERES EL GANADOR! 🏆");
    } else if (puntosJugador > puntosDealer) {
        console.log("🏆 ¡EXCELENTE! Le ganaste al Dealer. 🏆");
    } else if (puntosJugador < puntosDealer) {
        console.log("💀 La Casa gana. El azar no estuvo de tu lado. 💀");
    } else {
        console.log("🤝 ¡EMPATE! La apuesta se queda igual. 🤝");
    }
    
    readline.close();
}

function jugarRonda() {
    const carta = obtenerCarta();
    puntosJugador += carta;

    console.log(`\n--- RONDA ${ronda} ---`);
    console.log(`Tu carta: ${carta} | Tu total: ${puntosJugador}`);

    if (puntosJugador > 21) {
        console.log("\n💥 ¡TE PASASTE! Superaste 21. La Casa gana automáticamente. 💥");
        readline.close();
        return;
    }

    if (puntosJugador === 21) {
        console.log("\n✨ ¡21! ¡BLACKJACK! ✨");
        turnoDealer();
        return;
    }

    readline.question("¿Quieres 'pedir' otra carta o 'plantarte'?: ", (decision) => {
        const d = decision.toLowerCase();
        if (d === "plantar" || d === "plantarse" || d === "plantarse") {
            turnoDealer();
        } else {
            ronda++;
            jugarRonda();
        }
    });
}

// Iniciar el juego
jugarRonda();