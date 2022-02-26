let botones = document.getElementsByTagName("button");
let pantalla = document.getElementById("pantalla");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
pantalla.value = "";
var txtPantalla = 1;
var punto = 1;
var numero1 = null,
  numero2 = null,
  operador = null;

document.addEventListener("keydown", function (event) {
  // alert("Tecla presionada: "+event.keyCode)
  teclaPulsada(event);
});

const botonPulsado = (boton) => {
  if (txtPantalla == 1 && punto == 1 && boton.innerText == ".") {
    pantalla.value += "0.";
    punto = 0;
    txtPantalla = 0;
  } else if (punto == 1 && boton.innerText == ".") {
    pantalla.value += boton.innerText;
    punto = 0;
  }

  if (boton.innerText != ".") {
    pantalla.value += boton.innerText;
    txtPantalla = 0;
  }
};

// const teclaPulsada = (tecla) => {
//   console.log(tecla.keyCode);
//   if (tecla.keyCode == 110) {
//     if (txtPantalla == 1 && punto == 1) {
//       pantalla.value += "0.";
//       punto = 0;
//       txtPantalla = 0;
//     } else if (punto == 1) {
//       pantalla.value += tecla.key;
//       punto = 0;
//     }
//   } else if (tecla.keyCode >= 48 && tecla.keyCode <= 57) {
//     pantalla.value += tecla.key;
//     txtPantalla = 0;
//   } else if (tecla.keyCode >= 96 && tecla.keyCode <= 105) {
//     pantalla.value += tecla.key;
//     txtPantalla = 0;
//   } else if (
//     (tecla.keyCode >= 106 && tecla.keyCode <= 109) ||
//     tecla.keyCode == 111
//   ) {
//     operacionTeclas(tecla.key);
//   } else if (tecla.keyCode == 13) {
//     igual();
//   } else if (tecla.keyCode == 46) {
//     borrar();
//   }
// };

const operacion = (op) => {
  numero1 = pantalla.value;
  operador = op.innerText;
  pantalla.value = "";
  console.log(numero1 + " " + operador);
  punto = 1;
  txtPantalla = 1;
};

const operacionTeclas = (op) =>{
  numero1 = pantalla.value;
  operador = op;
  pantalla.value = "";
  console.log(numero1 + " " + operador);
  punto = 1;
  txtPantalla = 1;
}

const igual = () => {
  numero2 = pantalla.value;
  let operacion = numero1 + " " + operador + " " + numero2;
  let resultado = eval(operacion);
  pantalla.value = resultado;
  numero1 = null;
  numero2 = null;
  operador = null;
  console.log(operacion);
  console.log(resultado);
};

const borrar = () => {
  pantalla.value = "";
  numero1 = null;
  numero2 = null;
  operador = null;
  punto = 1;
  txtPantalla = 1;
};
