$(window).on('load',function() {

    
    let state2 = localStorage.getItem('state2');
    if(state2 !=='done'){
        window.location.href="../practicas/practica2.html";
    }else{
    function showMessage(){
        let state2_done = localStorage.getItem('state2_done');
        console.log(state2)
        if(state2 === null || state2_done ==='done'){
            console.log('not done')
        }else if(state2 ==='done'){
            localStorage.setItem('state2_done', 'done');
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();

}
});