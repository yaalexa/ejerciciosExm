import { Reserva } from './Reserva.js';

 class GestorReservas {
    constructor() {
        this.reservas = []; 
    }

    agregarReserva(reserva) {
        this.reservas.push(reserva);
    }

    listarReservas() {
        let resultado = '';
        for (let i = 0; i < this.reservas.length; i++) {
            let reserva = this.reservas[i];
            resultado += reserva.mostrarDetalles();
        }
        return resultado;
    }
}
export default  GestorReservas
