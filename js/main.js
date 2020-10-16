var lista = document.getElementById("lista");
var tareaInput = document.getElementById("tareaInput");
var btn = document.getElementById("btn-agregar");

// ----- agregar tarea -----

var agregarTarea = function (){ 
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li"),
        textoTarea = dsocument.createElement("p"),
        contenido = document.createTextNode(tarea);
        botonBorrar = document.createElement("div");
        botonBorrarTexto = document.createElement("p");
        botonBorrarContenido = document.createTextNode("X");

    if (tarea != "") {
        botonBorrarTexto.appendChild(botonBorrarContenido);
        botonBorrar.appendChild(botonBorrarTexto);
        nuevaTarea.appendChild(botonBorrar);
        textoTarea.appendChild(contenido);
        nuevaTarea.appendChild(textoTarea);
        lista.appendChild(nuevaTarea);
        document.getElementById("formTarea").reset();
        eventoEliminarTarea();
    }

};
btn.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keypress", function(event)  {
    var keycode = event.keycode || event.which;
    if (keycode === 13) {
        event.preventDefault();
        agregarTarea();
    }
})


// ----- eliminar tarea -----

function eventoEliminarTarea() {
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].firstChild.addEventListener("click",function () {
           this.parentNode.remove(this);
        });
    }
}
eventoEliminarTarea();