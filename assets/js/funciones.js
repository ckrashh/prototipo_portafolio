proyectos = {
    titulo: "",
    descripcion: "",
    imagen: "",
    link: ""
};

listProyectos = [];

function agregarProyecto(titulo, descripcion, imagen, link) {
    let nuevoProyecto = Object.create(proyectos);
    nuevoProyecto.titulo = titulo;
    nuevoProyecto.descripcion = descripcion;
    nuevoProyecto.imagen = imagen;
    nuevoProyecto.link = link;
    listProyectos.push(nuevoProyecto);
}



let currentIndex = 3;
let showingAll = false;
function proyect(){
    agregarProyecto("Cafetería Django", "Cafetería Django es una aplicación web desarrollada con el framework Django, diseñada para gestionar los procesos básicos de una cafetería, incluyendo la administración de productos, categorías y pedidos."+
    "Este proyecto fue creado con fines educativos como parte de un proceso de aprendizaje en desarrollo web con Python y Django.", 
    "cafeteria.jpg",  
    "https://github.com/ckrashh/cafeteria_django");


    agregarProyecto("Curva de aprendizaje", "Toda mi curva de aprendizaje en python y POO", "aprendizaje.png", "https://github.com/ckrashh/Full_Stack_Python");

    agregarProyecto("Bibloteca en python", 
    "Este proyecto es la evaluación final del Módulo 4 del Bootcamp de Python Avanzado de Talento Digital. Implementa un sistema de gestión de bibliotecas simple basado en la Programación Orientada a Objetos (POO) en Python."+
    " El programa permite a un usuario gestionar libros (físicos y digitales) a través de un menú interactivo, incluyendo funcionalidades como crear, eliminar, buscar y prestar/devolver libros, con persistencia de datos mediante un archivo de texto.", 
    "bibloteca.png", 
    "https://github.com/ckrashh/Evaluacion_Modulo4_python_Avanzado");

    agregarProyecto("CRUD De productos en django", "Este proyecto es una aplicación web sencilla de gestión de productos desarrollada con Django, creada como parte de la evaluación del Módulo 7 del bootcamp de Python de Talento Digital."+
    " Permite realizar operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) sobre un catálogo de productos.", 
    "proyecto1.jpg", 
    "https://github.com/ckrashh/Crud_productos_django");

    mostrarDatos(currentIndex);
};

function mostrarDatos(hasta){
    proyectosHTML = document.getElementById("listProyectos");
    let html = "";
    for (let proyecto = 0; proyecto < hasta && proyecto < listProyectos.length; proyecto++) {
        html += '<div class="col-sm-4 mb-3 mb-sm-0 fade-in">'+
                '<div id="'+listProyectos[proyecto].titulo+'" class="card mb-3" data-bs-theme="dark" alt="Tarjeta '+listProyectos[proyecto].titulo+'">'+
                    '<div class="card-header">'+
                        '<h2>'+listProyectos[proyecto].titulo+'</h2>'+
                    '</div>'+
                    '<div class="card-body text-info" alt="imagen de '+listProyectos[proyecto].titulo+'">'+
                        '<a href="'+listProyectos[proyecto].link+'"> '+
                        '<img  src="assets/img/'+listProyectos[proyecto].imagen+'" class="card-img-top" alt="imagen del proyecto '+listProyectos[proyecto].titulo+'">'+
                        '</a>'+
                    '</div>'+
                    '<div class="card-footer text-end" alt="Botones para obtener mas informacion y link al proyecto '+listProyectos[proyecto].titulo+'">'+
                        '<input type="button" value="Más Información" id="info'+listProyectos[proyecto].titulo+'" onClick="info(\''+listProyectos[proyecto].titulo+'\',\''+listProyectos[proyecto].descripcion+'\')"  class="btn btn-outline-primary"> '+
                        '<a href="'+listProyectos[proyecto].link+'" class="btn btn-outline-primary">Ir al proyecto <i class="bi bi-box-arrow-up-right ms-1"></i></a>'+
                    '</div>'+
                '</div>'+
            '</div>'
    }
    proyectosHTML.innerHTML = html;
};

function verMas(index){
    currentIndex += index;
    mostrarDatos(currentIndex);
    document.getElementById("verMenos").style.display = "inline";

    if (currentIndex >= listProyectos.length) {
        document.getElementById("verMas").style.display = "none";
    }else{
        document.getElementById("verMas").style.display = "inline";
    }
    if (currentIndex <= 3) {
        document.getElementById("verMenos").style.display = "none";
    }
}

function descargarCurriculum(){

  const enlace = document.createElement('a');

  enlace.href = "assets/img/CV_Gerald_Carrillo.pdf";

  enlace.download = "CV_Gerald_Carrillo.pdf";

  enlace.click();

}