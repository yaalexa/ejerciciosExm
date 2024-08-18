 class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrar() {
    return this.nombre +this.precio;
  }
}
let productos = [];
document.querySelector('#agregarProducto').addEventListener('click', () => {
    let nombre = document.querySelector('#nombre-producto').value;
    let precio = parseFloat(document.querySelector('#precio-producto').value);

    let producto = new Producto(nombre, precio);
    productos.push(producto);

    let lista = document.querySelector('#productos-lista');
    let item = document.createElement('li');
    item.innerText = producto.mostrar();
    lista.appendChild(item);
});