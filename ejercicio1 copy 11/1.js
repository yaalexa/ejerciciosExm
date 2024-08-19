class Area {
  constructor(nombre) {
    this.nombre = nombre;
    this.vendedores = [];
  }

  agregarVendedor(vendedor) {
    this.vendedores.push(vendedor);
  }

  mostrarVendedores() {
    let resultado = '';
        for (let i = 0; i < this.vendedores.length; i++) {
            let vendedor = this.vendedores[i];
            resultado += vendedor.mostrarDetalles();
        }
        return resultado;
  }
}
 class Vendedor {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  mostrarDetalles() {
    return this.nombre;
  }

  calcularComision(ventas) {
    return ventas * 0.1;
  }
}

class VendedorInterno extends Vendedor {
  constructor(nombre, id, salarioBase) {
    super(nombre, id);
    this.salarioBase = salarioBase;
  }

  mostrarDetalles() {
    return super.mostrarDetalles()+this.salarioBase;
  }

  calcularComision(ventas) {
    return super.calcularComision(ventas) + 200;
  }
}

 class VendedorExterno extends Vendedor {
  constructor(nombre, id, gastosTransporte) {
    super(nombre, id);
    this.gastosTransporte = gastosTransporte;
  }

  mostrarDetalles() {
    return super.mostrarDetalles()+this.gastosTransporte;
  }

  calcularComision(ventas) {
    return super.calcularComision(ventas) - 50;
  }
}

  let areaNorte = new Area('Norte');
  let areaSur = new Area('Sur');
  let vendedorInterno1 = new VendedorInterno('Ana Gómez', 2, 1500);
  let vendedorExterno1 = new VendedorExterno('Luis Fernández', 3, 300);

  areaNorte.agregarVendedor(vendedorInterno1);
  areaSur.agregarVendedor(vendedorExterno1);
  let ar = [areaNorte, areaSur]
document.querySelector('#md').addEventListener('click', () => {

    for (let i = 0; i < ar.length; i++) {
        let detalles = ar[i].mostrarVendedores();
        document.querySelector('#detalles').innerText += ar[i].nombre + detalles;
    }
});

document.querySelector('#mc').addEventListener('click', () => {
    
    for (let j = 0; j < ar.length; j++) {
        let are = ar[j];
         let totalComisiones = '';
        for (let i = 0; i < are.vendedores.length; i++) {
            let vendedor = are.vendedores[i];
            let comision = vendedor.calcularComision(1000);
            totalComisiones += vendedor.nombre+comision;
        }
        document.querySelector('#comisiones').innerText += are.nombre + totalComisiones;
    }
})
