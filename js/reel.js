$(window).on('load',function() {
    

    function showMessage(){
        let state5 = localStorage.getItem('state5');
        console.log(state5)
        if(state5 === null){
            console.log('not done')
        }else if(state5 ==='done'){
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});