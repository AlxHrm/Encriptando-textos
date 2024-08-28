function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let foto = document.getElementById("foto");

    let textoCifrado = texto
        .replace(/e/gi, "fgj")
        .replace(/i/gi, "ias")
        .replace(/a/gi, "ghj")
        .replace(/o/gi, "rjg")
        .replace(/u/gi, "gkg")

    if(texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        foto.src = "./imagenes/fondo2.jpg";
    }else {
        foto.src = "./imagenes/fondo1.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar";
        alert("Debes ingresar algun texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let foto = document.getElementById("foto");

    let textoCifrado = texto
    .replace(/fgj/gi, "e")
    .replace(/ias/gi, "i")
    .replace(/ghj/gi, "a")
    .replace(/rjg/gi, "o")
    .replace(/gkg/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        foto.src = "./imagenes/fondo3.jpg";
    }else{
        foto.src = "./imagenes/fondo1.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}
