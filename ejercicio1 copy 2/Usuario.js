 class Usuario {
  constructor(nombre) {
    this.tipo = 'Usuario';
    this.nombre = nombre;
  }

  mostrarInfo() {
     return 'Nombre:'+ this.nombre+ 'Tipo:' +this.tipo;
  }
}
export default Usuario