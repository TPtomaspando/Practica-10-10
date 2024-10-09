// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre1 = prompt("ingrese su nombre");
let edad1 = parseInt(prompt("ingrese la edad de: " + nombre1));

let nombre2 = prompt("ingrese su nombre");
let edad2 = parseInt(prompt("ingrese la edad de: " + nombre2));

let nombre3 = prompt("ingrese su nombre");
let edad3 = parseInt(prompt("ingrese la edad de: " + nombre3));

let edades = Math.max(edad1, edad2, edad3);

if (edad1 > edad2 && edad3) {
  document.write(nombre1 + " es el mayor del grupo");
} else if (edad2 > edad1 && edad3) {
  document.write(nombre2 + " es el mayor del grupo");
} else if (edad3 > edad1 && edad2) {
  document.write(nombre3 + " es el mayor del grupo");
} else {
  document.write("Todos tienen la misma edad");
}
