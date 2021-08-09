$(window).on('load',function() {

    let state3 = localStorage.getItem('state3');
    if(state3 !=='done'){
        window.location.href="../practicas/practica3.html";
    }else{
    function showMessage(){
        let state3_done = localStorage.getItem('state3_done');
        console.log(state3)
        if(state3 === null || state3_done ==='done'){
            console.log('not done')
        }else if(state3 ==='done'){
            localStorage.setItem('state3_done', 'done');
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();

}
});