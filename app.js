// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Definiendo la logica del codigo
//Variables principales
const listaPersonas = [];

// Funciones de desarollo
// Funcion para la validacion de caracteres y numero
function middleText(text){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    return regex.test(text)
}

// Funcion para resetear el input
const resetText = () => {return document.getElementById('amigo').value = "";}

// Funcion para mostrar lista de Nombres
function mostrarLista(){
    const listaNombres = document.getElementById('listaAmigos')
    listaNombres.innerHTML = ""; // Limpia antes de volver a pintar

    listaPersonas.forEach(nombre => {
        const li = document.createElement('li');
        li.innerText = nombre;
        listaNombres.appendChild(li);
    })

}

// Funciones Principales
function agregarAmigo(){
    // Obtener datos de entrada
    const datosEntrada = document.getElementById('amigo').value.trim();
    
    // Validacion de datos de entrada
    // Validamos que no este vacio
    if ( datosEntrada === ""){
        alert("Ingresa un valor...");
        resetText()

    // Validamos que no sean numeros o Caracteres
    } else if (!middleText(datosEntrada)){
        alert("No se aceptan caracteres especiales o numeros");
        resetText()

    // Seguardan los datos si se paso la verificacion
    } else {
        listaPersonas.push(datosEntrada);
        resetText()
        mostrarLista()
    }

    

    // Mostrar datos de entrada
}; 
function sortearAmigos(){};

