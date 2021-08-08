
let getUserInitial =localStorage.getItem("user");
let initial = " ";

if(getUserInitial === 'camila.marcos'){
    initial = 'C';
}else if(getUserInitial === 'tomas.colaprete'){
    initial = 'T';
}else if(getUserInitial === 'sofia.maidana'){
    initial = 'S';
}else if(getUserInitial === 'gianfranco.pozzuto'){
    initial = 'G';
}else if(getUserInitial === 'cristian.nigri'){
    initial = 'C';
}else if(getUserInitial === 'guido.tondo'){
    initial = 'G';
}else if(getUserInitial === 'emiliano.enriquez'){
    initial = 'E';
}else if(getUserInitial === 'rodrigo.portillo'){
    initial = 'R';
}

let printInitial = `<a class="perfilLink" href="../../perfil.html">${initial}</a>`;

$(document).ready(function () {
    const containerInitial = $("#containerInitial");
    containerInitial.html(printInitial);
});