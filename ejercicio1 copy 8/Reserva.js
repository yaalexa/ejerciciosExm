 class Reserva {
  constructor(nombreHuesped, fechaCheckin, fechaCheckout) {
    this.nombreHuesped = nombreHuesped;
    this.fechaCheckin = fechaCheckin;
    this.fechaCheckout = fechaCheckout;
  }

  mostrarDetalles() {
    return this.nombreHuesped+this.fechaCheckout
  }
}
export default Reserva 