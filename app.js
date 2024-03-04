//Definimos los botones y texto de entrada y salida//

let textarea = document.getElementById("mensaje");
let resultadoTexto = document.getElementById("resultado-texto");
let btnCopiar = document.getElementById("boton-copiar");
let btnEncriptar = document.getElementById("boton-encriptar");
let btnDesencriptar = document.getElementById("boton-desencriptar");
   

// click en botones//
btnEncriptar.addEventListener("click", clickEncriptar);
btnDesencriptar.addEventListener("click", clickDesencriptar);
btnCopiar.addEventListener("click", () => {
navigator.clipboard.writeText(resultadoTexto.textContent);
});

// función encriptar //

function encriptar(str){
var sustitucion = {
   a:"ai",
   e:"enter",
   i:"imes",
   o:"ober",
   u:"ufat"};
str = str.replace(/a|e|i|o|u/g, function(matched){
  return sustitucion[matched];
});
  console.log(str);
  resultadoTexto.textContent = str;
  if (resultadoTexto.innerText.length > 0){
    ocultarDiv();
  } else {
    mostrarDiv();
  }
}

// funcion desencriptar//

function desencriptar(str){
var sustitucion = {
   ai:"a",
   enter:"e",
   imes:"i",
   ober:"o",
   ufat:"u"};
str = str.replace(/ai|enter|imes|ober|ufat/g, function(matched){
  return sustitucion[matched];
});
  console.log(str);
  resultadoTexto.textContent = str;
  if (resultadoTexto.innerText.length > 0){
    ocultarDiv();
  } else {
    mostrarDiv();
  }
}

// función revisar mayusculas //

function revisarMayusculas(str) {
  const tieneMayusculas = /[A-ZÁÉÍÓÚ]/;
  const tieneAcentos = /[ÁÉÍÓÚáéíóú]/;
  return tieneMayusculas.test(str) || tieneAcentos.test(str);
}

// limpiar textarea//

textarea.addEventListener("click", function() {
  mensaje.value = "";
  });

// ocultar div //

let ocultarDiv = () => {
  let div = document.getElementById("sin-mensaje");
  let p = document.getElementById("resultado-texto");
  div.style.display = "none";
  p.style.display = "block";
  btnCopiar.style.display = "block";
}

// mostrar div //

let mostrarDiv = () => {
  let div = document.getElementById("sin-mensaje");
  let p = document.getElementById("resultado-texto");
  let btnCopiar = document.getElementById("boton-copiar");
  
  div.style.display = "block";
  p.style.display = "none";
  btnCopiar.style.display = "none";

}

// función click encriptar 

function clickEncriptar(){
let str = document.getElementById("mensaje").value;
  if (revisarMayusculas(str) == true) {
    mensaje.value = "¡Solo letras minúsculas y sin acentos!";
} else {
     encriptar(str);
}
}

// función click desencriptar 

function clickDesencriptar(){
str = document.getElementById("mensaje").value;
  if (revisarMayusculas(str) == true) {
    mensaje.value = "¡Solo letras minúsculas y sin acentos!";
} else {
     desencriptar(str);
}
}










