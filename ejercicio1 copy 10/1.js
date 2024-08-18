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
    return this.jugadores.find(j => j.nombre === nombreJugador);
  }

  listarPuntajes() {
    return this.jugadores.map(j => `${j.nombre}: ${j.puntaje} puntos`);
  }
}

export class Liga {
  constructor() {
    this.equipos = []; // Agregación: La liga tiene una lista de equipos
  }

  agregarEquipo(equipo) {
    this.equipos.push(equipo);
  }

  obtenerEquipo(nombreEquipo) {
    return this.equipos.find(e => e.nombre === nombreEquipo);
  }
}
