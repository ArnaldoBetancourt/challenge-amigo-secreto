// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// arreglo para almacenar los nombres de los amigos
let amigosIngresados = [];
//función para ingresar amigos
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre= input.value; 
    if(nombre=== ""){
        alert("por favor,inserte un nombre");
        return;
    }
    amigosIngresados.push(nombre);
    actualizarLista();
    input.value = "";

}
// Función para actualizar la lista
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigosIngresados.forEach((amigo) => {
        let li=document.createElement("li");
        li.textContent= amigo;
        lista.appendChild(li);
    });
}
//Función para sortear amigo aleatorio
function sortearAmigo(){
    if (amigosIngresados.length === 0){
        alert("Agrega al menos un amigo antes de sortear");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigosIngresados.length);
    let amigoSecreto = amigosIngresados[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es:${amigoSecreto}</li>`;
}