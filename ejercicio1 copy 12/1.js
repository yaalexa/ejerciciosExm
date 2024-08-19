 class Sede {
    constructor(ubicacion) {
        this.ubicacion = ubicacion;
    }

    mostrarDetalles() {
        return this.ubicacion;
    }
}

 class Compañia {
    constructor(nombre, ubicacionSede) {
        this.nombre = nombre;
        this.sede = new Sede(ubicacionSede); // Composición
    }

    mostrarDetalles() {
        return this.nombre+this.sede.mostrarDetalles();
    }
}

let compañiaTech = new Compañia('TechCorp', 'Calle Innovación 456');
console.log(compañiaTech.mostrarDetalles());


