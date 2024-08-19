 class Admin {
  constructor(nombre) {
    this.tipo = 'Administrador';
    this.nombre = nombre;
  }

  mostrarInfo() {
    return 'Nombre:'+ this.nombre+ 'Tipo:' +this.tipo;
  }
}

export default Admin;



