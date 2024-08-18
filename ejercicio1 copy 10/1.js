 class Jugador {
  constructor(nombre, equipo) {
    this.nombre = nombre;
    this.puntaje = 0;
    this.equipo = equipo; // Composición
  }

  asignarPuntos(puntos) {
    this.puntaje += puntos;
  }
}

 class Equipo {
  constructor(nombre) {
    this.nombre = nombre;
    this.jugadores = []; // agregacion:
  }

  agregarJugador(nombreJugador) {
    const jugador = new Jugador(nombreJugador, this); 
    this.jugadores.push(jugador); 
  }

  encontrarJugador(nombreJugador) {
     for (let i = 0; i < this.jugadores.length; i++) {
        let jugador = this.jugadores[i];
        if (jugador.nombre === nombreJugador) {
            return jugador; 
        }
    }
  }

  listarPuntajes() {
     let resultados = [];

    for (let i = 0; i < this.jugadores.length; i++) {
        let jugador = this.jugadores[i];
        let resultado = jugador.nombre+jugador.puntaje;
        resultados.push(resultado);
    }

    return resultados;
  }
}

export class Liga {
  constructor() {
    this.equipos = []; // Agregación
  }

  agregarEquipo(equipo) {
    this.equipos.push(equipo);
  }

  obtenerEquipo(nombreEquipo) {
    for (let i = 0; i < this.equipos.length; i++) {
        let equipo = this.equipos[i];
        if (equipo.nombre === nombreEquipo) {
            return equipo; 
        }
    }
  }
}
