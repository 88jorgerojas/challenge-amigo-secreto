// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales 
let listaAmigos = [];
//funiones complementarias
function mostrarListaDeAmigos(){


}

// funsiones principales 
function agregarAmigo(){
    let obtenerNombres = document.getElementById("amigo").value;
    listaAmigos.push(obtenerNombres);

    
    let mostrandoNombres = document.getElementById("listaAmigos");
    mostrandoNombres.innerHTML=`<li>${listaAmigos}</li>`;

}

function sortearAmigo(){



}