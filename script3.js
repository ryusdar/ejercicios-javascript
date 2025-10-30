const button = document.getElementById("button1");
button.addEventListener("click",function(){
    console.log("haz hecho click en el boton");
    alert("haz hecho click en el boton");
})

const titulo =document.getElementById("Titulo")
titulo.addEventListener("mouseover",function(){

})

    //EJERCICIO del dom ---- finalizado
//1)Selecciona un elemento por su ID y cambia su texto.
    const titulo1 = document.querySelector("#Titulo1");
    titulo1.style.color ="red";
    titulo.textContent = "titulo modificado";

//2)Cambia el color de fondo de un elemento al hacer clic en él.

    const elementoFondo = document.getElementById("miElemento"); // Asegúrate de tener un elemento con id="miElemento" en tu HTML
    elementoFondo.addEventListener("click", function() {
        this.style.backgroundColor = "red"; // Puedes cambiar "lightblue" por cualquier color que desees
    }); 
//3)Selecciona todos los elementos con una clase específica y cámbiales el texto.

const parrafo= document.querySelectorAll(".parrafo")
    parrafo.forEach(function(parrafo){
        parrafo.style.color= "purple";
       parrafo.textContent = "nuevo cambio";
    });

//4)Agrega una nueva clase a un elemento seleccionado.

const nueva_clase= document.querySelector(".rer")
    nueva_clase.classList.add("nuevaClase");
    nueva_clase.style.color= "green";

//5)Elimina una clase existente de un elemento.
const eliminar = document.querySelector(".nuevaClase")
    eliminar.classList.remove("nuevaClase");


//6)Cambia el contenido HTML de un div usando innerHTML.
    const cambiarhtml = document.querySelector(".cambio")
    cambiarhtml.innerHTML= "<h2>Nuevo contenido HTML</h2><p>Este es un párrafo agregado mediante innerHTML.</p>"


//7)Muestra en la consola el texto de un párrafo seleccionado
const ere = document.querySelector(".rer")
console.log(ere.textContent);


//8)Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.

const todosLosParrafos = document.querySelectorAll(".ter");

todosLosParrafos.forEach(function(parrafo) {
  console.log(parrafo.textContent);
});

//9)Crea un botón que, al hacer clic, oculte un párrafo.
const botonocul = document.getElementById("botonocultar");
const parrafoocul = document.getElementById("Ocultar");

botonocul.addEventListener("click", function() {
    parrafoocul.style.display = "none";
}); 

//10)Agrega un nuevo elemento HTML a un contenedor existente.

    const conten = document.getElementById("contenedor");
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "Este es un nuevo párrafo agregado al contenedor.";
    conten.appendChild(nuevoElemento);

//ejercicios del dom segunda parte

//1)Crea un botón que muestre un mensaje en consola al hacer clic.

const boton12 = document.getElementById(" boton12");
boton12.addEventListener("click", function() {
    console.log("Botón 12 ha sido clickeado");
});

//2)Haz que un campo de texto cambie su color de fondo al escribir en él.

  const input = document.getElementById("miInput");
  input.addEventListener("input", () => {
    input.style.backgroundColor = input.value.trim() ? "red" : "white";
  });

//3)Implementa un contador que aumente cada vez que se haga clic en un botón.

const contador=document.getElementById("contador");
let contadorvalor=0;
contador.addEventListener("click", function() {
    contadorvalor++;
    contador.textContent= "contador " + contadorvalor;
});

//4)Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function(event) {
    const nombreInput = document.getElementById("nombre");  

    if (nombreInput.value.trim() === "") {
        event.preventDefault(); 
        alert("El campo de nombre no puede estar vacío.");
    }else{
        alert("Formulario enviado correctamente.");
    }
}); 

//5)Cambia la posición de un elemento cuando se pase el ratón sobre él

const moverelemento = document.getElementById("cambiar de lugar");
moverelemento.addEventListener("mouseover",function() {
    moverelemento.style.position = "relative";
    moverelemento.style.left = "20px";
});
moverelemento.addEventListener("mouseout",function() {
    moverelemento.style.left = "0px";
});

//6)Detecta y muestra en la consola la tecla presionada por el usuario.
document.addEventListener("keydown", function(event) {   
    console.log("Tecla presionada: " + event.key);
});

//7)Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).

const boton_toggle = document.getElementById("toggles");
const elemento_toggle = document.getElementById("elemento_toggle");
boton_toggle.addEventListener("click", function() {
    if (elemento_toggle.style.display === "none") {
        elemento_toggle.style.display = "block";    
    } else {
        elemento_toggle.style.display = "none";    
    }   
});
//8)Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.

const selectFrutas = document.getElementById("frutas");

selectFrutas.addEventListener("change", () => {
  console.log("Fruta seleccionada:", selectFrutas.value);
});
 
//9)Implementa un formulario con validación para correos electrónicos.
const formgmail = document.getElementById("gamil1"); 
const emailInput = document.getElementById("email");  
const errorMsg = document.getElementById("errorEmail");

formgmail.addEventListener("submit", function(event) {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailPattern.test(emailValue)) {
        event.preventDefault(); 
        errorMsg.style.display = "block"; // mostrar mensaje
        emailInput.style.border = "2px solid red"; // marcar input
    } else {
        errorMsg.style.display = "none"; 
        emailInput.style.border = "";
    }
});
