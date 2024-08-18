
 class Tarea {
  static tareas = []; 

  constructor(nombre, descripcion) {
    this._nombre = nombre;
    this._descripcion = descripcion;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  getDescripcion() {
    return this._descripcion;
  }

  setDescripcion(descripcion) {
    this._descripcion = descripcion;
  }

  mostrar() {
    return this._nombre+this._descripcion;
  }

  static agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  static mostrarTareas() {
    let resultado = '';
    for (let i = 0; i < this.tareas.length; i++) {
        let tarea = this.tareas[i];
        resultado += tarea.mostrar();
    }
    return resultado;
  }
}


document.querySelector('#agregarTarea').addEventListener('click', () => {
    let nombre = document.querySelector('#nombre-tarea').value;
    let descripcion = document.querySelector('#descripcion-tarea').value;
    let tarea = new Tarea(nombre, descripcion);
  
        Tarea.agregarTarea(tarea);
        let lista = document.querySelector('#lista-tareas');
        let item = document.createElement('li');
        item.innerText = tarea.mostrar();
        lista.appendChild(item);
});
