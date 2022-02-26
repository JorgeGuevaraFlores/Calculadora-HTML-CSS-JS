let botones = document.getElementsByTagName("button");
let pantalla = document.getElementById("pantalla");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
pantalla.value = "";
var txtPantalla = 1;
var punto = 1;
var numero1 = null,
  numero2 = null,
  operador = null;
let checkIgual=false;

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

const operacion = (op) => {
  numero1 = pantalla.value;
  operador = op.innerText;
  pantalla.value = "";
  console.log(numero1 + " " + operador);
  punto = 1;
  txtPantalla = 1;
  checkIgual = false;
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
  if(checkIgual){
    numero1=pantalla.value;
  } else {
    numero2 = pantalla.value;
  }
  let operacion = numero1 + " " + operador + " " + numero2;
  let resultado = eval(operacion);
  pantalla.value = resultado;
  checkIgual=true;
  console.log(numero1)
  console.log(numero2)
  // numero1 = null;
  // numero2 = null;
  // operador = null;
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
