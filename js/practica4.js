const list = document.getElementById('lista');
Sortable.create(list,{
    group: 'shared', 
    swap: true,
    animation: 150
});

const list2 = document.getElementById('lista2');
Sortable.create(list2,{
    group: 'shared', 
    swap: true,
    animation: 150
});

const list3 = document.getElementById('list3');
new Sortable(list3, {
    group: 'shared',
    swap: true,
    animation: 150,
    store:{
        set:(sortable)=>{
            const orden = sortable.toArray();
            console.log(orden);
            localStorage.setItem('orden2', orden.join('.'));
        },
        get:(sortable)=>{
            const orden = localStorage.getItem('orden2');
            return orden ? orden.split('.') : [];
        }
    }
});

function checkOrder(){
    console.log('hola p');
    const orden2 = localStorage.getItem('orden2').split('.');
    console.log(orden2);
    const rightOrder2 = ["M", "E", "R", "I", "E", "N", "D", "A"]

    if(JSON.stringify(orden2) === JSON.stringify(rightOrder2)){
        window.location.href="../portfolio/motion.html";
        localStorage.setItem('state4', 'done');
    }else if(JSON.stringify(orden2) !== JSON.stringify(rightOrder2)){
        $('#exampleModal').modal('show');
    }
}

$(window).on('load',function() {
    $("#spinner").fadeOut(800);
    $("#content").show(4000);

    function close1(){
        let state4 = localStorage.getItem('state4');
        console.log(state4)
        if(state4 === null){
            console.log('not done')
        }else if(state4 ==='done'){
            window.location.href="../portfolio/motion.html";
        }
    }
    close1();
});

