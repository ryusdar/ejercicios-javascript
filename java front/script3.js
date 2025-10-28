const button = document.getElementById("button1");
button.addEventListener("click",function(){
    console.log("haz hecho click en el boton");
    alert("haz hecho click en el boton");
})

const titulo =document.getElementById("Titulo")
titulo.addEventListener("mouseover",function(){

})
const titulo1 = document.querySelector("#Titulo1");
titulo1.style.color ="red";
titulo.textContent = "titulo modificado";

const parrafo= document.querySelectorAll(".parrafo")
    parrafo.forEach(function(parrafo){
        parrafo.style.color= "purple";
       parrafo.textContent = "nuevo cambio";
    });
   