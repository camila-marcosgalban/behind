
let getUserInitial =localStorage.getItem("user");
let initial = " ";

if(getUserInitial === 'camila.marcos'){
    initial = 'C';
    nombre = 'Camila';
    apellido = 'Marcos Galbán';
    nivel = 'avanzado';
    fechaEntreamiento = ' ';
}else if(getUserInitial === 'tomas.colaprete'){
    initial = 'T'
    nombre = 'Tomás';
    apellido = 'Colaprete';
    nivel = 'avanzado';
    fechaEntreamiento = '';
}
else if(getUserInitial === 'sofia.maidana'){
    initial = 'S';
    nombre = 'Sofia';
    apellido = 'Maidana';
    nivel = 'avanzado';
    fechaEntreamiento = ' ';
}
else if(getUserInitial === 'gianfranco.pozzuto'){
    initial = 'G';
    nombre = 'GianFranco';
    apellido = 'Pozzuto';
    nivel = 'avanzado';
    fechaEntreamiento = ' ';
}
let printInitial = `<a class="perfilLink" href="perfil.html">${initial}</a>`;
let printInitial2 = `<a class="perfilLink2" href="perfil.html">${initial}</a>`;
let printPerfil = `<div><p><b>Nombre: </b>${apellido}, ${nombre}</p>
<p><b>Nivel: </b>${nivel}</p>
<p><b>Fecha del entrenamiento: </b>${fechaEntreamiento}</p>
</div>`;

let savedColor = '';

$(document).ready(function () {
    const containerInitial = $("#containerInitial");
    const containerInitial2 = $("#containerInitial2");
    const containerPerfil = $("#containerPerfil");
    containerInitial.html(printInitial);
    containerInitial2.html(printInitial2);
    containerPerfil.html(printPerfil);
});