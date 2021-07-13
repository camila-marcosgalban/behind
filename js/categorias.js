$(window).on('load',function() {
    

    function showMessage(){
        let state2 = localStorage.getItem('state2');
        console.log(state2)
        if(state2 === null){
            console.log('not done')
        }else if(state2 ==='done'){
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});