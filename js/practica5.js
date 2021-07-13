function validColor(){
    window.location.href="../portfolio/reel.html";
    localStorage.setItem('state5', 'done')
}

$(window).on('load',function() {
    $("#spinner").fadeOut(800);
    $("#content").show(4000);

    function close1(){
        let state5 = localStorage.getItem('state5');
        console.log(state5)
        if(state5 === null){
            console.log('not done')
        }else if(state5 ==='done'){
            window.location.href="../portfolio/reel.html";
        }
    }
    close1();
});