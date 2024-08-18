import  UsuarioFactory  from './usuarioFactory.js';

document.querySelector('#crearUsuario').addEventListener('click', () => {
    let tipo = document.getElementById('tipo-usuario').value;
    let nombre = document.getElementById('nombre-usuario').value;

    let usuario = UsuarioFactory.crearUsuario(tipo, nombre);
    document.querySelector('#usuario-info').innerText = usuario.mostrarInfo();
});
