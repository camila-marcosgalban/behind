$(window).on('load',function() {

    let state1 = localStorage.getItem('state1');
    if(state1 !=='done'){
        window.location.href="../practicas/practica1.html";
    }else{
    function showMessage(){
        let state1 = localStorage.getItem('state1');
        let state1_done = localStorage.getItem('state1_done');
        console.log(state1)
        if(state1 === null || state1_done ==='done'){
            console.log('not done')
        }else if(state1 ==='done'){
            localStorage.setItem('state1_done', 'done');
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();

}
});