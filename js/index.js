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
    if(savedUser === 'camila.marcos' || savedUser === 'tomas.colaprete' || savedUser === 'sofia.maidana' || savedUser === 'gianfranco.pozzuto' || savedUser === 'cristian.nigri' || savedUser === 'guido.tondo' || savedUser === 'emiliano.enriquez' || savedUser === 'rodrigo.portillo'){
        if(savedPass === 'entrenamiento2021'){
            window.location.href="html/practicas.html";
            /*alert('success!')*/
        }else if(savedPass !== 'entrenamiento2021'){
            $('#exampleModal2').modal('show');
            console.log('no pass')
        }
    }else if(savedUser !== 'camila.marcos' || savedUser !== 'tomas.colaprete' || savedUser !== 'sofia.maidana' || savedUser !== 'gianfranco.pozzuto' || savedUser !== 'cristian.nigri' || savedUser !== 'guido.tondo' || savedUser !== 'emiliano.enriquez' || savedUser !== 'rodrigo.portillo'){
        if(savedPass !== 'entrenamiento2021'){
            $('#exampleModal3').modal('show');
            console.log('no user no pass')
        }else if(savedPass === 'entrenamiento2021'){
            $('#exampleModal').modal('show');
            console.log('no user')
        }
    }
  }