 class Notificador {
  constructor() {
    this.usuarios = [];
  }

  suscribir(usuario) {
    this.usuarios.push(usuario);
  }

  notificar(mensaje) {
   for (let i = 0; i < this.usuarios.length; i++) {
    this.usuarios[i].recibirNotificacion(mensaje);
    }
  }
}

 class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.notificaciones = [];
  }

  recibirNotificacion(mensaje) {
    this.notificaciones.push(mensaje);
  }
 obtenerUltimaNotificacion() {
        return this.notificaciones[this.notificaciones.length - 1];
     }
  
}

let notificador = new Notificador();
let usuarios = [];

document.querySelector('#agregarUsuario').addEventListener('click', () => {
    let nombre = document.querySelector('#nuevo-usuario').value;
    let usuario = new Usuario(nombre);
    usuarios.push(usuario);
    notificador.suscribir(usuario);
    let lista = document.querySelector('#usuarios-lista');
    let item = document.createElement('li');
    item.innerText = nombre;
    lista.appendChild(item);
});

document.querySelector('#enviarActualizacion').addEventListener('click', () => {
    
    let mensaje = document.querySelector('#actualizacion').value;
    notificador.notificar(mensaje);
    let lista = document.querySelector('#actualizaciones-lista');
    for (let i = 0; i < notificador.usuarios.length; i++) {
    let usuario = notificador.usuarios[i];
    let item = document.createElement('li');
    item.innerText = usuario.obtenerUltimaNotificacion();
    lista.appendChild(item);
}
});

