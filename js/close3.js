 /*close sesion*/
 function closeBtn(){
    let userStateBtn = localStorage.getItem('user');
    console.log(userStateBtn);
    if(userStateBtn !== null){
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        window.location.href="../../../index.html";
    }else{
        window.location.href="../../../index.html";
    };
}
    /*keep closed*/
        $(document).ready(function() {
    function close(){
        let userState = localStorage.getItem('user');
        console.log(userState)
        if(userState === null){
            window.location.href="../../../index.html";
        }else{
            console.log(userState)
        }
    }
    close();
});