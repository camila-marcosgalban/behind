/*login*/
function login() {
    /*save*/
    const saveUser = document.getElementById("InputText").value;
    localStorage.setItem("user",saveUser);
    console.log(saveUser);
    const savePass = document.getElementById("InputPassword").value;
    localStorage.setItem("password",savePass);
    console.log(savePass);
    /*get*/
let savedUser = localStorage.getItem("user");
console.log('User:' + savedUser);
let savedPass = localStorage.getItem("password");
console.log('Password:' + savedPass);
    /*validate*/
    if(savedUser === 'camila.marcos' && savedPass === 'entrenamiento2021'){
        window.location.href="html/practicas.html";
        /*alert('success!')*/
    }else if(savedUser !== 'camila.marcos' && savedPass === 'entrenamiento2021'){
        $('#exampleModal').modal('show');
    }else if(savedUser === 'camila.marcos' && savedPass !== 'entrenamiento2021'){
        $('#exampleModal2').modal('show');
    }else if(savedUser === 'tomas.colaprete' && savedPass === 'entrenamiento2021'){
        window.location.href="html/practicas.html";
        /*alert('success!')*/
    }else if(savedUser !== 'tomas.colaprete' && savedPass === 'entrenamiento2021'){
        $('#exampleModal').modal('show');
    }else if(savedUser === 'tomas.colaprete' && savedPass !== 'entrenamiento2021'){
        $('#exampleModal2').modal('show');
    }else if(savedUser === 'sofia.maidana' && savedPass === 'entrenamiento2021'){
        window.location.href="html/practicas.html";
        /*alert('success!')*/
    }else if(savedUser !== 'sofia.maidana' && savedPass === 'entrenamiento2021'){
        $('#exampleModal').modal('show');
    }else if(savedUser === 'sofia.maidana' && savedPass !== 'entrenamiento2021'){
        $('#exampleModal2').modal('show');
    }else if(savedUser === 'gianfranco.pozzuto' && savedPass === 'entrenamiento2021'){
        window.location.href="html/practicas.html";
        /*alert('success!')*/
    }else if(savedUser !== 'gianfranco.pozzuto' && savedPass === 'entrenamiento2021'){
        $('#exampleModal').modal('show');
    }else if(savedUser === 'gianfranco.pozzuto' && savedPass !== 'entrenamiento2021'){
        $('#exampleModal2').modal('show');
    }else{
        $('#exampleModal3').modal('show');
    }
  }