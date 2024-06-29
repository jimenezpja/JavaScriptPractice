var opcion1 = prompt("Jugador 1 Elige una opción: piedra, papel o tijera");
var opciones = ["piedra", "papel", "tijera"];
var opcion2 = prompt("Jugador 2 Elige una opción: piedra, papel o tijera");
var opciones = ["piedra", "papel", "tijera"];

if (opcion1 === opcion2) {
  alert("Empate");
} else if (opcion1 === "piedra" && opcion2 === "tijera" || opcion1 === "papel" && opcion2 === "piedra" || opcion1 === "tijera" && opcion2 === "papel") {
  alert("Jugador 1 Gano");
} else {
  alert("Jugador 2 Gano");
}