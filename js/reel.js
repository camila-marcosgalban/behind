$(window).on('load',function() {
    
    let state5 = localStorage.getItem('state5');
    if(state5 !=='done'){
        window.location.href="../practicas/practica5.html";
    }else{
        function showMessage(){
            let state5_done = localStorage.getItem('state5_done');
            console.log(state5)
            if(state5 === null || state5_done ==='done'){
                console.log('not done');
            }else if(state5 ==='done'){
                localStorage.setItem('state5_done', 'done');
                $('#exampleModal').modal('show');
                $("#content").show(1500);
            }
        }
        showMessage();
    }
});