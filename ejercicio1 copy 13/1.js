 class Proyecto {
    constructor(nombre) {
        this.nombre = nombre;
        this.miembros = []; 
    }

    agregarMiembro(miembro) {
        if (miembro instanceof Miembro) {
                this.miembros.push(miembro);
                miembro.agregarProyecto(this); 
            }
    }

    mostrarDetalles() {
        let miembrosNombres = '';
        for (let i = 0; i < this.miembros.length; i++) {
            let nombreMiembro = this.miembros[i].nombre;
            miembrosNombres += nombreMiembro;
        }
        return this.nombre+miembrosNombres;
    }
}
 class Miembro {
    constructor(nombre) {
        this.nombre = nombre;
        this.proyectos = []; 
    }

    agregarProyecto(proyecto) {
        if (proyecto instanceof Proyecto) {
                this.proyectos.push(proyecto);
        } 
    }

    mostrarDetalles() {
      let proyectosNombres = '';
        for (let i = 0; i < this.proyectos.length; i++) {
            let nombreProyecto = this.proyectos[i].nombre;
            proyectosNombres += nombreProyecto;
        }
        return this.nombre+proyectosNombres;
    }
}
let proyectoAlpha = new Proyecto('Alpha');
let proyectoBeta = new Proyecto('Beta');
let miembroSofia = new Miembro('sofia');
let miembroLaura = new Miembro('Laura');

proyectoAlpha.agregarMiembro(miembroSofia);
proyectoBeta.agregarMiembro(miembroSofia);
proyectoBeta.agregarMiembro(miembroSofia);

console.log(proyectoAlpha.mostrarDetalles());
console.log(proyectoBeta.mostrarDetalles());
console.log(miembroSofia.mostrarDetalles());
console.log(miembroLaura.mostrarDetalles());