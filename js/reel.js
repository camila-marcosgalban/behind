$(window).on('load',function() {
    

    function showMessage(){
        let state5 = localStorage.getItem('state5');
        let state5_done = localStorage.getItem('state5_done');
        console.log(state5)
        if(state5 === null || state5_done ==='done'){
            console.log('not done')
        }else if(state5 ==='done'){
            localStorage.setItem('state5_done', 'done');
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});