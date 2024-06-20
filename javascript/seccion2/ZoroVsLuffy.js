class Personaje {
  constructor(nombre, ataque, vida) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.vida = vida;
  }

  atacar(oponente) {
  let daño = Math.floor(Math.random()*this.ataque);
  console.log(`${this.nombre} ataca a ${oponente.nombre} por ${daño} puntos de daño!`);
  oponente.recibirDaño(daño);
  }

recibirDaño(daño) {
  this.vida -= daño;
  console.log(`${this.nombre} recibe ${daño} puntos de daño! Vida restante: ${this.vida}`);
}

defender() {
  this.vida += 9;
  console.log(`${this.nombre} se defiende y gana 3 puntos de vida! Vida actual: ${this.vida}`);
  }
}

function iniciarPelea(jugador1, jugador2) {
  let turno = Math.random() < 0.5 ? 1 : 2;
    while (jugador1.vida > 0 && jugador2.vida > 0) {
      if (turno === 1) {
        const accion = Math.random() < 0.5 ? "atacar" : "defender";
      if (accion === "atacar") {
        jugador1.atacar(jugador2);
        }
      else {
        jugador1.defender();
      }
      turno = 2;
      }
      else {
      const accion = Math.random() < 0.5 ? "atacar" : "defender";
      if (accion === "atacar") {
        jugador2.atacar(jugador1);
        }
      else {
        jugador2.defender();
      }
      turno = "defender";
      }
    }

    if (jugador1.vida > 0) {
      console.log(`${jugador1.nombre} gana la pelea!`);
    } else {
      console.log(`${jugador2.nombre} gana la pelea!`);
    }
  }

let jugador1 = new Personaje("Zoro", 40, 100);
let jugador2 = new Personaje("Luffy", 55, 100);

iniciarPelea(jugador1, jugador2);