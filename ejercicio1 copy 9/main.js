 class Habitacion {
  constructor(numero, precio) {
    this.numero = numero;
    this.precio = precio;
  }

  mostrarDetalles() {
    return this.numero +this.precio;
  }
}

 class HabitacionSimple extends Habitacion {
  constructor(numero, precio) {
    super(numero, precio);
    this.tipo = 'Simple';
  }
}

 class HabitacionDoble extends Habitacion {
  constructor(numero, precio) {
    super(numero, precio);
    this.tipo = 'Doble';
  }
}

document.querySelector('#agregarHabitacion').addEventListener('click', () => {
    let tipo = document.querySelector('#tipo-habitacion').value;
    let numero = parseInt(document.querySelector('#numero-habitacion').value);
    let precio = parseFloat(document.querySelector('#precio-habitacion').value);

    let habitacion;
    if (tipo === 'simple') {
        habitacion = new HabitacionSimple(numero, precio);
    } else if (tipo === 'doble') {
        habitacion = new HabitacionDoble(numero, precio);
    } 
  let item = document.createElement('li');
  item.innerText = habitacion.mostrarDetalles();
   document.querySelector('#lista-habitaciones').appendChild(item);
    
});
