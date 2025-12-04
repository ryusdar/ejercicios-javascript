// ---- segunda parte ----- terminado
//1 Declara una función que calcule el área de un triángulo.


let b =5;
let h =10;
function areatriangular(b,h){
    return b*h/2;
}
console.log("El area del rectangulo es: " + areatriangular(b,h));
// 2 Crea una función anónima que determine si un número es par o impar.

const par =function(a) {
 if (a % 2 ===0){
   return "es par";
 }else{
    return "es impar";
 }
}
console.log(par(7));

// 3  Usa una función de flecha para multiplicar dos números. 

const multiplicar= multiplicarNumero= (x,y) => x*y;

console.log("El resultado de la multiplicacion es: " + multiplicar(4,5));

// 4 Escribe una función que convierta una palabra a mayúsculas.

const convertirAMayusculas = (str) => str.toUpperCase();

console.log(convertirAMayusculas("hola mundo"));

// 5 Haz una función que reciba dos números y retorne el mayor de ellos.
let num1= 14;
let num2= 9;
function mayorDeDos(num1,num2){
    if (num1 > num2){       
        return num1;
    }else{
        return num2;
    }     
}
console.log("El numero mayor es: " + mayorDeDos(num1,num2));

//6 Crea una función que invierta una cadena.
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
} 
console.log(invertirCadena("hola mundo"));

// 7 Declara una función que convierta grados Celsius a Fahrenheit.
let Fahrenheit;
let Celsius=prompt("ingrese la temperatura en celsius ");
function temperatura(Celsius){
  return Fahrenheit = (Celsius * 1.8) + 32;
  
}
console.log("La temperatura en Fahrenheit es: " + temperatura(Celsius));

//8 Escribe una función que verifique si una palabra es un palíndromo.

function esPalindromo(palabra) {
    const palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
}
console.log(esPalindromo("solo"));
//9 Haz una función que calcule la suma de los números de un arreglo.

function sumararreglo(numeros){
  let suma;
  suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma;  
}
const arreglo=[1,2,3,4,5];
console.log("La suma del arreglo es: " + sumararreglo(arreglo));

//10 Usa funciones para simular una calculadora básica.
let nume1= 8;
let nume2= 4;
function calculadora(nume1, nume2, operador) {
    let resultado; 
    if(operador === "+"){
      resultado = nume1 + nume2;
    }else if(operador === "-"){
      resultado = nume1 - nume2;
    }else if(operador === "*"){
      resultado = nume1 * nume2;
    }else if(operador === "/"){
      resultado = nume1 / nume2;
    }else{
      return "Operador no válido";
    }
    return resultado;
  }
  console.log("El resultado de la calculadora es: " + calculadora(nume1,nume2,"*"));
