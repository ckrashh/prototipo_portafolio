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

let currentIndex = 2;
let showingAll = false;
function proyect(){
    agregarProyecto("Proyecto 1", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");
    agregarProyecto("Proyecto 2", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");
    agregarProyecto("Proyecto 3", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");
    agregarProyecto("Proyecto 4", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");
    agregarProyecto("Proyecto 5", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");
    agregarProyecto("Proyecto 6", "VA TODA LA DESCRIPCION DEL PROYECTO", "proyecto1.jpg", "index.html");

    mostrarDatos(currentIndex);
};

function mostrarDatos(hasta){
    proyectosHTML = document.getElementById("listProyectos");
    let html = "";
    for (let proyecto = 0; proyecto < hasta && proyecto < listProyectos.length; proyecto++) {
        html += '<div class="col-sm-6 mb-3 mb-sm-0 fade-in">'+
                '<div id="'+listProyectos[proyecto].titulo+'" class="card mb-3" data-bs-theme="dark" alt="Tarjeta '+listProyectos[proyecto].titulo+'">'+
                    '<div class="card-header">'+
                        '<h2>'+listProyectos[proyecto].titulo+'</h2>'+
                    '</div>'+
                    '<div class="card-body text-info" alt="imagen de '+listProyectos[proyecto].titulo+'">'+
                        '<a href="index.html"> '+
                        '<img  src="assets/img/'+listProyectos[proyecto].imagen+'" class="card-img-top" alt="imagen del proyecto '+listProyectos[proyecto].titulo+'">'+
                        '</a>'+
                    '</div>'+
                    '<div class="card-footer text-end" alt="Botones para obtener mas informacion y link al proyecto '+listProyectos[proyecto].titulo+'">'+
                        '<input type="button" value="Más Información" id="info'+listProyectos[proyecto].titulo+'" onClick="info(\''+listProyectos[proyecto].titulo+'\',\''+listProyectos[proyecto].descripcion+'\')"  class="btn btn-primary"> '+
                        '<a href="'+listProyectos[proyecto].link+'" class="btn btn-primary">Ir al proyecto</a>'+
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
    if (currentIndex <= 2) {
        document.getElementById("verMenos").style.display = "none";
    }
}
