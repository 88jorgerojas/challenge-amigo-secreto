// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales 
let listaAmigos = [];
//funiones complementarias
function mostrarListaDeAmigos(){


}

// funsiones principales 
function agregarAmigo(){
    let obtenerNombres = document.getElementById("amigo").value;
// evita agregar nombres vacios
    if(obtenerNombres.trim() === ""){
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    listaAmigos.push(obtenerNombres);
//resetear el imput cada vez que se ingrese un nombre, para ingresar uno nuevo
    document.getElementById("amigo").value = "";
//mostrar los nombres en forma de colunma, no en una sola linea 
    let mostrandoNombres = document.getElementById("listaAmigos");
    mostrandoNombres.innerHTML=`<li>${listaAmigos.join("</li><li>")}</li>`;

}

function sortearAmigo(){



}