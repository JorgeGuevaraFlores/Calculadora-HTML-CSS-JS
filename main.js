let botones = document.getElementsByTagName("button");
let pantalla = document.getElementById("pantalla");
pantalla.value = "";
var txtPantalla = 1;
var punto = 1;
var numero1 = null,
  numero2 = null,
  operador = null;
let checkIgual = false;

const botonPulsado = (boton) => {
  let valor = boton.innerText;
  validar(valor);
  // console.log(valor);
};

document.addEventListener("keyup", function (event) {
  alert("Tecla presionada: " + event.keyCode);
  let tecla = String(event.keyCode);
  teclaPulsada(tecla);
});

const teclaPulsada = (key) => {};

const validar = (boton) => {
  if (txtPantalla == 1 && punto == 1 && boton == ".") {
    pantalla.value += "0.";
    punto = 0;
    txtPantalla = 0;
  } else if (punto == 1 && boton == ".") {
    pantalla.value += boton;
    punto = 0;
  }

  if (boton != ".") {
    pantalla.value += boton;
    txtPantalla = 0;
  }
};

const operacion = (op) => {
  if (typeof op != "string") {
    operador = op.innerText;
  }
  numero1 = pantalla.value;
  pantalla.value = "";
  console.log(numero1 + " " + operador);
  punto = 1;
  txtPantalla = 1;
  checkIgual = false;
};

const operacionTeclas = (op) => {
  numero1 = pantalla.value;
  operador = op;
  pantalla.value = "";
  console.log(numero1 + " " + operador);
  punto = 1;
  txtPantalla = 1;
};

const igual = () => {
  if (checkIgual) {
    numero1 = pantalla.value;
  } else {
    numero2 = pantalla.value;
  }
  let operacion = numero1 + " " + operador + " " + numero2;
  let resultado = eval(operacion);
  pantalla.value = resultado;
  checkIgual = true;
  console.log(numero1);
  console.log(numero2);
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
  checkIgual = false;
};
