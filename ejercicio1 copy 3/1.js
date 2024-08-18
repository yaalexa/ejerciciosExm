 class EnvioEstandar {
  calcular(peso) {
    return peso * 5;
  }
}

 class EnvioExpress {
  calcular(peso) {
    return peso * 10;
  }
}

 class EnvioNocturno {
  calcular(peso) {
    return peso * 20;
  }
}

class CalculadoraEnvio {
  constructor(estrategia) {
    this.estrategia = estrategia;
  }

  calcular(peso) {
    return this.estrategia.calcular(peso);
  }
}

document.querySelector('#calcularEnvio').addEventListener('click', () => {
  let peso = parseFloat(document.querySelector('#peso').value);
 let tipo = document.querySelector('#opcion-envio').value;

  let estrategia;
 if (tipo === 'estandar') {
    estrategia = new EnvioEstandar();
} else if (tipo === 'express') {
    estrategia = new EnvioExpress();
} else if (tipo === 'overnight') {
    estrategia = new EnvioNocturno();
} else {
    throw new Error('Tipo de envío desconocido');
}

 let calculadora = new CalculadoraEnvio(estrategia);
 let costo = calculadora.calcular(peso);
  document.querySelector('#envio-info').innerText = costo;
})