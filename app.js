// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales 
let listaAmigos = [];

//funiones complementarias

function mostrarListaDeAmigos(){
    let listarAmigos = document.getElementById("listaAmigos");
    listarAmigos.style.display='contents'
    listarAmigos.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos

    //recorrer lista para la previsualizacion
    listaAmigos.forEach(nombre =>{
        let añadirNombres = document.createElement('li');
        añadirNombres.innerText = nombre;
        listarAmigos.appendChild(añadirNombres);
    })
}

//funcion para validar texto
function validarTexto(texto){
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto); // el .test   Retorna true si el texto es válido
}

// funsiones principales 
function agregarAmigo(){
    let obtenerNombres = document.getElementById("amigo").value.trim();
   
    // evita agregar nombres vacios
    if(obtenerNombres === ""){
        alert("Por favor, inserte un nombre.");
        document.getElementById("amigo").value = "";
        
    } else if(validarTexto(obtenerNombres) === false){
        alert("El nombre ingresado no es válido. Por favor, usa solo letras.");
        document.getElementById("amigo").value = "";
    } 
    else{
        listaAmigos.push(obtenerNombres);
        //resetear el imput cada vez que se ingrese un nombre, para ingresar uno nuevo
        document.getElementById("amigo").value = "";

        //llamamos la funsion para que visualice los nombres
        mostrarListaDeAmigos()

    }
    
}
// creamos una funcion para sortear un amigo
function sortearAmigo() {
    //se esta formateando la lista anterior
    document.getElementById("listaAmigos").style.display='none'
    //comparacion de datos, si lista es igual a cero
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    //seleccionamos un amigo al azar
    let nombreAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[nombreAleatorio];
    
   //removemos el amigo seleccionado de la lista
    listaAmigos.splice(nombreAleatorio, 1);
    // estamos mostrando en una ul el resultado obtenido del nombre sorteado
    document.getElementById("resultado").
    textContent =`El amigo secreto es: ${amigoSeleccionado}`;

    
}







