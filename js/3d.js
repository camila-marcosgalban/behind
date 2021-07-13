$(window).on('load',function() {
    

    function showMessage(){
        let state1 = localStorage.getItem('state1');
        console.log(state1)
        if(state1 === null){
            console.log('not done')
        }else if(state1 ==='done'){
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});