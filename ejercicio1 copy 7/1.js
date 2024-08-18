 class Documento {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }
    
    mostrar() {
        return `Título: ${this.titulo}, Contenido: ${this.contenido}`;
    }
}

class GestorDocumentos {
    constructor() {
        this.documentos = [];
    }

    agregarDocumento(documento) {
        this.documentos.push(documento);
    }

    listarDocumentos() {
        let resultado = '';
        for (let i = 0; i < this.documentos.length; i++) {
            let doc = this.documentos[i];
            resultado += doc.mostrar();
        }
        return resultado;
    }
}

let doc1 = new Documento('Doc1', 'Contenido del Documento 1');
let doc2 = new Documento('Doc2', 'Contenido del Documento 2');

let gestor = new GestorDocumentos();
gestor.agregarDocumento(doc1);
gestor.agregarDocumento(doc2);

console.log(gestor.listarDocumentos());
