let getUserInitial =localStorage.getItem("user");
let initial = " ";
let nombre = " ";
let apellido = " ";
let nivel = " ";
let state5 = localStorage.getItem('state5');
    if(state5 ==='done'){
       
    }else{
        nivel = 'avanzado';
    }

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
    fechaEntreamiento = ' ';
}else if(getUserInitial === 'sofia.maidana'){
    initial = 'S';
    nombre = 'Sofia';
    apellido = 'Maidana';
    nivel = 'avanzado';
    fechaEntreamiento = ' ';
}else if(getUserInitial === 'gianfranco.pozzuto'){
    initial = 'G';
    nombre = 'GianFranco';
    apellido = 'Pozzuto';
    nivel = 'avanzado';
    fechaEntreamiento = ' ';
}else if(getUserInitial === 'cristian.nigri'){
    initial = 'C';
    nombre = 'Cristian';
    apellido = 'Nigri';
    if(state5 ==='done'){
        nivel = 'avanzado';
    }else{
        nivel = 'principiante';
    }
    fechaEntreamiento = '<p><b>Fecha del entrenamiento: </b>13/08/2021</p> ';
}else if(getUserInitial === 'guido.tondo'){
    initial = 'G';
    nombre = 'Guido';
    apellido = 'Tondo';
    if(state5 ==='done'){
        nivel = 'avanzado';
    }else{
        nivel = 'principiante';
    }
    fechaEntreamiento = '<p><b>Fecha del entrenamiento: </b>13/08/2021</p> ';
}else if(getUserInitial === 'emiliano.enriquez'){
    initial = 'E';
    nombre = 'Emiliano';
    apellido = 'Enriquez';
    if(state5 ==='done'){
        nivel = 'avanzado';
    }else{
        nivel = 'principiante';
    }
    fechaEntreamiento = '<p><b>Fecha del entrenamiento: </b>13/08/2021</p> ';
}else if(getUserInitial === 'rodrigo.portillo'){
    initial = 'R';
    nombre = 'Rodrigo';
    apellido = 'Portillo';
    if(state5 ==='done'){
        nivel = 'avanzado';
    }else{
        nivel = 'principiante';
    }
    fechaEntreamiento = '<p><b>Fecha del entrenamiento: </b>13/08/2021</p> ';
}
let printInitial = `<a class="perfilLink" href="perfil.html">${initial}</a>`;
let printInitial2 = `<a class="perfilLink2" href="perfil.html">${initial}</a>`;
let printPerfil = `<div><p><b>Nombre: </b>${apellido}, ${nombre}</p>
<p><b>Nivel: </b>${nivel}</p>
${fechaEntreamiento}
</div>`;

$(document).ready(function () {
    const containerInitial = $("#containerInitial");
    const containerInitial2 = $("#containerInitial2");
    const containerPerfil = $("#containerPerfil");
    containerInitial.html(printInitial);
    containerInitial2.html(printInitial2);
    containerPerfil.html(printPerfil);
});