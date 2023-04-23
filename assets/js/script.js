//estandar de encriptacion
let codigo = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};
//-----EXTRACCION DE ELEMENTOS-----
const btn_encriptar = document.getElementById("encriptar");
const btn_desencriptar = document.querySelector("#desencriptar");
const btn_copy = document.getElementById("copy");
//texto ingresado
const texto = document.querySelector("#crypt");
//panel de vista
const panel_respuesta = document.querySelector("#texto-encriptado");
const response = document.getElementById("text-response");
//panel not found
const not_found = document.querySelector(".not-aside");

//funciones para los botones
const actionE = () => {
    if (texto.value.length == 0 || texto.value.trim() == "") {
        alert("Escriba un mensaje para encriptar");
    } else {
        showResponsePanel();
        response.value = encriptar(texto.value);
        texto.value = "";
    }
};

const actionD = () => {
    if (texto.value.length == 0 || texto.value.trim() == "") {
        alert("Escriba un mensaje para encriptar");
    } else {
        showResponsePanel();
        response.value = desencriptar(texto.value);
        texto.value = "";
    }
};

//vinculacion de acciones
btn_encriptar.addEventListener("click", actionE);
btn_desencriptar.onclick = actionD;
btn_copy.addEventListener("click", () => {
    response.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    showNotFoundPanel();
});

//show and hidden objects
const showResponsePanel = () => {
    not_found.style.display = "none";
    panel_respuesta.style.display = "flex";
};

const showNotFoundPanel = () => {
    panel_respuesta.style.display = "none";
    not_found.style.display = "flex";
};

//funciones de encriptar y desencriptar
function desencriptar(parrafo) {
    palabrasSinEspacios = String(parrafo).trim();
    let palabraDesencriptada;
    //validar que el usuario no ingrese caracteres en mayusculas
    if (/[A-Z]/.test(palabrasSinEspacios)) {
        alert("No se permite el uso de Mayúsculas.");
        showNotFoundPanel();
    } else if (/[^a-zA-Z0-9\s]/.test(palabrasSinEspacios)) {
        alert("No esta permitido el uso de caracteres especiales");
        showNotFoundPanel();
    } else {
        //reemplazo el conjunto de palabras por sus respectivas letras
        palabraDesencriptada = palabrasSinEspacios
            .replace(new RegExp(codigo.a, "g"), codigo.ai)
            .replace(new RegExp(codigo.e, "g"), codigo.enter)
            .replace(new RegExp(codigo.i, "g"), codigo.imes)
            .replace(new RegExp(codigo.o, "g"), codigo.ober)
            .replace(new RegExp(codigo.u, "g"), codigo.ufat);
        return palabraDesencriptada;
    }
}

//funcion para encriptar
function encriptar(parrafo) {
    //asigno a la variable palabras el texto convertido a string sin espacios adicionales.
    palabrasSinEspacios = String(parrafo).trim();

    //validar que el usuario no ingrese caracteres en mayusculas
    if (/[A-Z]/.test(palabrasSinEspacios)) {
        alert("No se permite el uso de Mayúsculas.");
        showNotFoundPanel();
    } else if (/[^a-zA-Z0-9\s]/.test(palabrasSinEspacios)) {
        alert("No esta permitido el uso de caracteres especiales");
        showNotFoundPanel();
    } else {
        //divido las palabras separandolas por caracteres individualmente
        arregloPalabras = palabrasSinEspacios.split("");

        //se recorre todo el arreglo para posteriormente reemplazar las letras por las designadas en el ejercicio
        for (let c = 0; c < arregloPalabras.length; c++) {
            switch (arregloPalabras[c]) {
                case "a":
                    arregloPalabras[c] = codigo.a;
                    break;

                case "e":
                    arregloPalabras[c] = codigo.e;
                    break;

                case "i":
                    arregloPalabras[c] = codigo.i;
                    break;

                case "o":
                    arregloPalabras[c] = codigo.o;
                    break;

                case "u":
                    arregloPalabras[c] = codigo.u;
                    break;

                default:
                    break;
            }
        }
        return (palabrasSinEspacios = arregloPalabras.join(""));
    }
}
