$(window).on('load',function() {
    

    function showMessage(){
        let state4 = localStorage.getItem('state4');
        console.log(state4)
        if(state4 === null){
            console.log('not done')
        }else if(state4 ==='done'){
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});