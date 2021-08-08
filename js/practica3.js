const list = document.getElementById('lista');

Sortable.create(list,{
    animation:150,
    group: "lista",
    store:{
        set:(sortable)=>{
            const orden = sortable.toArray();
            console.log(orden);
            localStorage.setItem('orden', orden.join('.'));
        },
        get:(sortable)=>{
            const orden = localStorage.getItem('orden');
            return orden ? orden.split('.') : [];
        }
    }
});

function checkOrder(){
    const order = localStorage.getItem('orden').split('.');
    console.log(order);
    const rightOrder = ["1", "2", "3", "4", "5"];

    if(JSON.stringify(order) === JSON.stringify(rightOrder)){
        window.location.href="../portfolio/categorias2.html";
        localStorage.setItem('state3', 'done')
    }else{
        $('#exampleModal').modal('show');
    }
}

$(window).on('load',function() {
    $("#spinner").fadeOut(800);
    $("#content").show(4000);

    function close1(){
        let state3 = localStorage.getItem('state3');
        console.log(state3)
        if(state3 === null){
            console.log('not done')
        }else if(state3 ==='done'){
            window.location.href="../portfolio/categorias2.html";
        }
    }
    close1();
})

