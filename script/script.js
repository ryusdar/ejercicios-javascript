alert("hola mundo");
console.log("hola gente");
let nombre="juanmaa";
console.log(nombre);

const edad=20;
console.log("mi nombre es "+ nombre +"y mi edad es "+ edad);

let esMayordeedad = edad<= 18;
console.log("¿es mayor de edad? "+ esMayordeedad)
let a = 6;
let b= 10;
if (a < b) {
    console.log("a es menor que b ")
    
}
let diadelasemana=3;

switch (diadelasemana) {
    case 1:
        console.log("LUNES")
        
        break;
    case 2:
        console.log("Martes")
        
        break
         case 2:
        console.log("Martes")
        
        break
         case 3:
        console.log("MIERCOLES")
        
        break
         case 4:
        console.log("JUEVES")
        
        break
         case 5:
        console.log("VIERNES")
        
        break
         case 6:
        console.log("SABADO")
        
        break
         case 7:
        console.log("DOMINGO")
        
        break
    default:
        console.log("dia invalido ")
        
        
        break;
}
let delasemana="g";

switch (delasemana) {
    case "a":
        console.log("LUNES")
        
        break;
    case "b":
        console.log("Martes")
        
        break
         case "c":
        console.log("MIERCOLES")
        
        break
         case "d":
        console.log("JUEVES")
        
        break
         case "e":
        console.log("VIERNES")
        
        break
         case "f":
        console.log("SABADO")
        
        break
         case "g":
        console.log("DOMINGO")
        
        break
    default:
        console.log("dia invalido ")
        
        
        break;
}



// ejercicios 
// ---- primera parte finalizado
//1)Escribe un programa que verifique si un número es positivo o negativo.
let c = -5;

if (c => 0) {
    console.log("el nuemero es positivo")
    
}else{
    console.log("el numero es negativo ")
}

// 2 Usa switch para imprimir el día de la semana según un número del 1 al 7.

switch (diadelasemana) {
    case 1:
        console.log("LUNES")
        
        break;
    case 2:
        console.log("Martes")
        
        break
         case 2:
        console.log("Martes")
        
        break
         case 3:
        console.log("MIERCOLES")
        
        break
         case 4:
        console.log("JUEVES")
        
        break
         case 5:
        console.log("VIERNES")
        
        break
         case 6:
        console.log("SABADO")
        
        break
         case 7:
        console.log("DOMINGO")
        
        break
    default:
        console.log("dia invalido ")
        
        
        break;
}

// 3 Haz un bucle for que imprima los números del 1 al 10.


for (let i=0;  i<=10; i++) {
    console.log(i)

}
// 4 Crea un programa que calcule el factorial de un número usando while.

function factorial(n) {

    if (n < 0) return NaN;
    
    // Inicializar el resultado
    let resultado = 1;
    
    // Usar while para multiplicar todos los números hasta n
    while (n > 1) {
        resultado *= n;
        n--;
    }
    
    return resultado;
}
console.log(factorial(10)); 

//5 Escribe un condicional que determine si una persona puede votar según su edad.
let edad2=16;
if (edad2 >= 18) {
    console.log("puede votar") 
}else{
    console.log("no puede votar")
}

//6 Imprime los números pares entre 1 y 20 con un bucle for.

for (let i = 0;  i<= 20; i++) {
    
    if (i % 2 === 0) {
        console.log(i) 
    } 
    
    
}

//7 Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).

let calificacion= 2;
switch (calificacion) {
    case 1:
        console.log("A")
        
        break;
        case 2:
        console.log("B")
        break;
        case 3:
        console.log("C")
        break; 
        case 4:
        console.log("D")
        break;  
        case 5:
        console.log("F")
        break;

    default:
        console.log("calificacion invalida ")
        
        break;
}
//8 Haz un programa que pida dos números y los sume si ambos son positivos.

let f =Number(prompt("ingrese un numero "));
let v =Number(prompt("ingrese un numero "));
let suma;
 

if (f >= 0 && v>=0) {
    suma = f + v;
    alert("la suma es " + suma);
    
}else{
    alert("no se puede realizar la suma hay un numero negativo ")
}

//9 Escribe un bucle while que cuente de 10 a 1 en orden descendente.



let sumatoria=0;
sumatoria= (17 % 3);
console.log("el residuo de la division es " + sumatoria);

//10 Crea una calculadora básica que permita sumar o restar según el operador ingresado.

let numero1= Number(prompt("ingrese el primer numero"));
let numero2= Number(prompt("ingrese el segundo numero"));
let operador= prompt("ingrese el operador (+ o -)");
let resultado;
if (operador === "+") {
    resultado= numero1 + numero2;
    alert("el resultado de la suma es " + resultado);  
}else if (operador === "-") {
    resultado= numero1 - numero2;
    alert("el resultado de la resta es " + resultado);  
}else{
    alert("operador invalido");
}
