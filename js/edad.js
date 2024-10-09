// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
  document.write("tienes la edad suficiente para conducir");
} else {
  document.write("no tienes la edad suficiente para conducir");
}
