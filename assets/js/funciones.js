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
    agregarProyecto("Cafeteria en django", "Proyecto de una pagina para una cafeteria echa en django y bootstrap con logeo y CRUD correspondiente para administradores", "cafeteria.jpg", "https://github.com/ckrashh/cafeteria_django");
    agregarProyecto("Curva de aprendizaje", "Toda mi curva de aprendizaje en python y POO", "aprendizaje.png", "https://github.com/ckrashh/Full_Stack_Python");
    agregarProyecto("Bibloteca en python", "Proyecto de una biblioteca echa en python y POO sin interfaz grafica, en el cual tiene consistencia de datos y manejo de archivos", "bibloteca.png", "https://github.com/ckrashh/Evaluacion_Modulo4_python_Avanzado");
    agregarProyecto("CRUD De productos en django", "Proyecto de evaluacion de modulo Django-avanzado del bootcamp FullStack Python de Talento digital", "proyecto1.jpg", "https://github.com/ckrashh/Crud_productos_django");

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