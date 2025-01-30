// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// arreglo para lamacenar los nombres de los amigos
let amigosIngresados = [];
//función para ingresar amigos
function agregarAmigo(){
    let nombre= nombreDeAmigo.value; 
    if(nombre=== " "){
        alert("por favor,inserte un nombre");
        return;
    }
    amigosIngresados.push(nombre);
}