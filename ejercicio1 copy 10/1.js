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
    let jugador = new Jugador(nombreJugador, this); 
    this.jugadores.push(jugador); 
  }

  encontrarJugador(nombreJugador) {
     for (let i = 0; i < this.jugadores.length; i++) {
        let jugador = this.jugadores[i];
        if (jugador.nombre == nombreJugador) {
            return jugador; 
        }
    }
  }
 listarJugador() {
     for (let i = 0; i < this.jugadores.length; i++) {
        let jugador = this.jugadores[i];
            return jugador; 
        
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

 class Liga {
  constructor() {
    this.equipos = []; // Agregación
  }

  agregarEquipo(equipo) {
      this.equipos.push(equipo);
      return equipo;
  }

  obtenerEquipo(nombreEquipo) {
    for (let i = 0; i < this.equipos.length; i++) {
        let equipo = this.equipos[i];
        if (equipo.nombre == nombreEquipo) {
            return equipo; 
        }
    }
  }
}
let liga = new Liga();

document.querySelector('#crearEquipo').addEventListener('click', () => {
    let nombre = document.querySelector('#nombre-equipo').value;
    let equipo = new Equipo(nombre);
    liga.agregarEquipo(equipo);
    let item = document.createElement('li');
    item.innerText = equipo.nombre;
    document.querySelector('#lista-equipo').appendChild(item);
});

document.querySelector('#agregarJugador').addEventListener('click', ()=>{
    let nombreEquipo = document.querySelector('#nombre-equipo-jugador').value;
    let nombreJugador = document.querySelector('#nombre-jugador').value;
    let equipo = liga.obtenerEquipo(nombreEquipo);
    try {
        equipo.agregarJugador(nombreJugador);
    } catch (error) {
    }
 
   let item = document.createElement('li');
    item.innerText = equipo.listarJugador().nombre;
    document.querySelector('#lista-jugador').appendChild(item);
});
document.querySelector('#asignarPuntos').addEventListener('click', () => {
    let nombreEquipo = document.querySelector('#nombre-equipo-puntos').value;
    let nombreJugador = document.querySelector('#nombre-jugador-puntos').value;
    let puntos = parseInt(document.querySelector('#puntos').value);
    let equipo = liga.obtenerEquipo(nombreEquipo);
    let jugador = equipo.encontrarJugador(nombreJugador);
    jugador.asignarPuntos(puntos);
    document.querySelector('#puntajes').innerText=jugador.puntaje;
});
document.querySelector('#listarPuntajes').addEventListener('click', () => {
    let nombreEquipo = document.querySelector('#nombre-equipo-listar').value;
    let equipo = liga.obtenerEquipo(nombreEquipo);
    let listaPuntajes = equipo.listarPuntajes();
    let lista = document.querySelector('#lista-puntajes');
   for (let i = 0; i < listaPuntajes.length; i++) {
    let puntaje = listaPuntajes[i]; 
    const item = document.createElement('li');
    item.innerText = puntaje;
    document.querySelector('#lista-puntajes').appendChild(item);
}
});