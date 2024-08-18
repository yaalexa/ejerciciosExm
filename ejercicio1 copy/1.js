class Producto {
  constructor(nombre, cantidad) {
    this._nombre = nombre;
    if (cantidad >= 0) {
    this._cantidad = cantidad;
} else {
    this._cantidad = 0;
}
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  getCantidad() {
    return this._cantidad;
  }

  agregarCantidad(cantidad) {
      if (cantidad > 0)
      {
          this._cantidad += cantidad;
        }  
  }

  retirarCantidad(cantidad) {
    if (cantidad > 0 && this._cantidad - cantidad >= 0) {
      this._cantidad -= cantidad;
    }
  }
}

let producto;
document.querySelector('#agregarP').addEventListener('click', () => {
     let nombre = document.getElementById('nombre').value;
  let cantidad = parseInt(document.getElementById('cantidad').value);
  producto = new Producto(nombre, cantidad);
    document.getElementById('producto-info').innerText = 'Nombre:' + producto.getNombre() +
        'Cantidad:' + producto.getCantidad(); 
})