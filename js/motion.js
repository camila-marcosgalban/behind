$(window).on('load',function() {
    

    function showMessage(){
        let state4 = localStorage.getItem('state4');
        let state4_done = localStorage.getItem('state4_done');
        console.log(state4)
        if(state4 === null || state4_done ==='done'){
            console.log('not done')
        }else if(state4 ==='done'){
            localStorage.setItem('state4_done', 'done');
            $('#exampleModal').modal('show');
            $("#content").show(1500);
        }
    }
    showMessage();
});