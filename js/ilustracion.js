$(window).on('load',function() {
    

    function showMessage(){
        let state3 = localStorage.getItem('state3');
        console.log(state3)
        if(state3 === null){
            console.log('not done')
        }else if(state3 ==='done'){
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});