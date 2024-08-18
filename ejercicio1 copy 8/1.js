import  Reserva  from './Reserva.js';
import  GestorReservas  from './Gestor.js';
document.querySelector('#reservarh').addEventListener('click', () => {
  let nombreHuesped = document.querySelector('#nombre-huesped').value;
  let fechaCheckin = document.querySelector('#fecha-checkin').value;
  let fechaCheckout = document.querySelector('#fecha-checkout').value;
  let reserva = new Reserva(nombreHuesped, fechaCheckin, fechaCheckout);
  let GR = new GestorReservas()
  GR.agregarReserva(reserva);
  document.querySelector('#lista-reservas').innerText = GR.listarReservas();
});

 