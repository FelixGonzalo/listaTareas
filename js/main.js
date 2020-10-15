var lista = document.getElementById("lista");
var tareaInput = document.getElementById("tareaInput");
var btn = document.getElementById("btn-agregar");

// ----- agregar tarea

var agregarTarea = function (){ 
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li"),
        textoTarea = document.createElement("p"),
        contenido = document.createTextNode(tarea);

    if (tarea === "") {
        alert("agrega una tarea");
    } else {
        textoTarea.appendChild(contenido);
        nuevaTarea.appendChild(textoTarea);
        lista.appendChild(nuevaTarea);
        eventoEliminarTarea();
    }

};
btn.addEventListener("click", agregarTarea);

// ----- eliminar tarea

function eventoEliminarTarea() {
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click",function () {
           this.parentNode.removeChild(this);
        });
    }
}
eventoEliminarTarea();

