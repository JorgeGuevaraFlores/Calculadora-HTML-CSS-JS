let pantalla = document.getElementById("pantalla");
pantalla.value = "0";
let colocarPunto = true;
let accion = false;
let valoresOperacion = [];
var parte1 = null;

const botonPulsado = (boton) => {
  let numeroPulsado = boton.innerText;
  pintarPantalla(numeroPulsado);
};

const pintarPantalla = (numero) => {
  if (pantalla.value === "0" && numero === ".") {
    pantalla.value = "0.";
    colocarPunto = false;
  }

  if ((numero != "." && pantalla.value === "0") || accion) {
    pantalla.value = numero;
    accion = false;
  } else {
    if (numero === "." && colocarPunto) {
      pantalla.value += numero;
      colocarPunto = false;
    } else if (numero != ".") {
      pantalla.value += numero;
    }
  }
};

const operacion = (operador) => {
  let numero1 = pantalla.value;
  parte1 = numero1 + operador.innerText;
  accion = true;
  colocarPunto = true;
  console.log(parte1);
};

const igual = () => {
  if (parte1 != null) {
    let numero2 = pantalla.value;
    parte1 += numero2;
    let resultado = eval(parte1);
    console.log(resultado, parte1);
    pantalla.value = resultado;
  }
};

const borrar = () => {
  pantalla.value = "0";
  colocarPunto = true;
  accion = false;
  valoresOperacion = [];
  parte1 = null;
};
