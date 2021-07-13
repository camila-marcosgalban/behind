function validImg(){
    window.location.href="../portfolio/3d.html";
    localStorage.setItem('state1', 'done')
}

$(window).on('load',function() {
    $("#spinner").fadeOut(800);
    $("#content").show(4000);

    function close1(){
        let state1 = localStorage.getItem('state1');
        console.log(state1)
        if(state1 === null){
            console.log('not done')
        }else if(state1 ==='done'){
            window.location.href="../portfolio/3d.html";
        }
    }
    close1();
});