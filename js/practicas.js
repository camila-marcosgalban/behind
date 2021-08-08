/*user info*/
let getUser =localStorage.getItem("user");
let sayHi = " ";

if(getUser === 'camila.marcos'){
    sayHi = 'Camila';
}else if(getUser === 'tomas.colaprete'){
    sayHi = 'Tomás';
}else if(getUser === 'sofia.maidana'){
    sayHi = 'Sofia';
}else if(getUser === 'gianfranco.pozzuto'){
    sayHi = 'GianFranco';
}else if(getUser === 'cristian.nigri'){
    sayHi = 'Cristian';
}else if(getUser === 'guido.tondo'){
    sayHi = 'Guido';
}else if(getUser === 'emiliano.enriquez'){
    sayHi = 'Emiliano';
}else if(getUser === 'rodrigo.portillo'){
    sayHi = 'Rodrigo';
}

let state1 = localStorage.getItem('state1')
    let state2 = localStorage.getItem('state2')
    let state3 = localStorage.getItem('state3')
    let state4 = localStorage.getItem('state4')
    let state5 = localStorage.getItem('state5')


    $(window).on('load',function() {
        $("#spinner").fadeOut(800);
        $("#content").show(4000);
    });

$(document).ready(function () {
    const containerName = $("#containerName");
    if(state1 === null){
        const printName = `<h1 class="pt-3 sayHi">¡Te damos la Bienvenida ${sayHi}!</h1>`;
        containerName.html(printName);
    }else if(state1 ==='done' && state2 === null && state3 === null && state4 === null && state5 === null){
        const printName2 = '<h1 class="pt-3 sayHi">¡Avanzá a la práctica 2!</h1>';
        containerName.html(printName2);
    }else if(state1 ==='done' && state2 === 'done' && state3 === null && state4 === null && state5 === null){
        const printName3 = '<h1 class="pt-3 sayHi">Tu camino sigue en la práctica 3. ¡Buena suerte!</h1>';
        containerName.html(printName3);
    }else if(state1 ==='done' && state2 === 'done' && state3 === 'done' && state4 === null && state5 === null){
        const printName4 = '<h1 class="pt-3 sayHi">Cada vez falta menos para el final del entrenamiento. Continua con la práctica 4.</h1>';
        containerName.html(printName4);
    }else if(state1 ==='done' && state2 === 'done' && state3 === 'done' && state4 === 'done' && state5 === null){
        const printName5 = '<h1 class="pt-3 sayHi">¡Estás a un paso de ser un experto en mirar más allá! Continua con la práctica 5.</h1>';
        containerName.html(printName5);
    }
});

/*relink*/

function practica1() {
    let practica1V = 'valid';
    if(practica1V = 'valid'){
        window.location.href="practicas/practica1.html";
    }
}

function practica2() {
    let practica2V = 'valid';
    if(practica2V = 'valid'){
        window.location.href="practicas/practica2.html";
    }
}

function practica3() {
    let practica3V = 'valid';
    if(practica3V = 'valid'){
        window.location.href="practicas/practica3.html";
    }
}

function practica4() {
    let practica4V = 'valid';
    if(practica4V = 'valid'){
        window.location.href="practicas/practica4.html";
    }
}

function practica5() {
    let practica5V = 'valid';
    if(practica5V = 'valid'){
        window.location.href="practicas/practica5.html";
    }
}


$( document ).ready(function() {
    /*states*/
    let state1 = localStorage.getItem('state1')
    let state2 = localStorage.getItem('state2')
    let state3 = localStorage.getItem('state3')
    let state4 = localStorage.getItem('state4')
    let state5 = localStorage.getItem('state5')

    /*box1*/
    if(state1 === 'done'){
        /*dots*/
            const practica1Box = document.getElementById('practica1Box');
            practica1Box.classList.add('valid')
            practica1Box.classList.remove('invalid')
            /*boxes*/
            document.getElementById("practica2").removeAttribute("disabled");
            const practica2 = document.getElementById('practica2');
            practica2.classList.remove('inhabilitada');
            practica2.classList.add('habilitada');
    }
    
    /*box2*/
    if(state2 === 'done'){
        /*dots*/
        const practica2Box = document.getElementById('practica2Box');
        practica2Box.classList.add('valid')
        practica2Box.classList.remove('invalid')
        /*boxes*/
        document.getElementById("practica3").removeAttribute("disabled");
        const practica3 = document.getElementById('practica3');
        practica3.classList.remove('inhabilitada')
        practica3.classList.add('habilitada')
}

    /*box3*/
    if(state3 === 'done'){
        /*dots*/
        const practica3Box = document.getElementById('practica3Box');
        practica3Box.classList.add('valid')
        practica3Box.classList.remove('invalid')
        /*boxes*/
        document.getElementById("practica4").removeAttribute("disabled");
        const practica4 = document.getElementById('practica4');
        practica4.classList.remove('inhabilitada')
        practica4.classList.add('habilitada')
}
    /*box4*/
    if(state4 === 'done'){
        /*dots*/
        const practica4Box = document.getElementById('practica4Box');
        practica4Box.classList.add('valid')
        practica4Box.classList.remove('invalid')
        /*boxes*/
        document.getElementById("practica5").removeAttribute("disabled");
        const practica5 = document.getElementById('practica5');
        practica5.classList.remove('inhabilitada')
        practica5.classList.add('habilitada')
}

    /*box2*/
    if(state5 === 'done'){
        /*dots*/
        const practica5Box = document.getElementById('practica5Box');
        practica5Box.classList.add('valid')
        practica5Box.classList.remove('invalid')
}
  });