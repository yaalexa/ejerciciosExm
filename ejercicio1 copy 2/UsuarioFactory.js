import  Admin from './Admin.js';
import Usuario  from './Usuario.js';
class UsuarioFactory {
  static crearUsuario(tipo, nombre) {
    if (tipo=='admin') {
        return new Admin(nombre);
    }
    if(tipo=='usuario')
        return new Usuario(nombre);
    }
}
  export default UsuarioFactory