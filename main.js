let pantalla = document.getElementById("pantalla");
pantalla.value = "0";
let colocarPunto = true;
let accion = false;
var numero1 = 0,
  numero2 = 0,
  parte1 = 0,
  clickIgual = 0,
  operacionRealizar = null,
  resultadoOperacion = 0,
  auxiliar = 0;

const botonPulsado = (boton) => {
  let numeroPulsado = boton.innerText;
  pintarPantalla(numeroPulsado);
};

const pintarPantalla = (numero) => {
  if (
    (pantalla.value === "0" && numero === ".") ||
    (numero === "." && accion)
  ) {
    pantalla.value = "0.";
    colocarPunto = false;
    accion = false;
  }

  if ((numero != "." && pantalla.value === "0") || (numero != "." && accion)) {
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
  numero1 = pantalla.value;
  operacionRealizar = operador.innerText;
  parte1 = numero1 + operador.innerText;
  accion = true;
  clickIgual = 0;
  console.log(parte1);
};

const igual = () => {
  if (clickIgual > 0) {
    numero1 = pantalla.value;
    parte1 = numero1 + operacionRealizar + numero2;
    resultadoOperacion = eval(parte1);
    pantalla.value = resultadoOperacion;
  } else {
    numero2 = pantalla.value;
    let completa = parte1 + numero2;
    resultadoOperacion = eval(completa);
    pantalla.value = resultadoOperacion;
    clickIgual++;
  }

  console.log(numero1, numero2, resultadoOperacion);
};
