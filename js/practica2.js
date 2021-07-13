let codeValues = [];
let rightAnswer =  ["a", "r", "g", "e", "n", "t", "i", "n", "o", "s"];
let rightAnswer2 =  ["A", "r", "g", "e", "n", "t", "i", "n", "o", "s"];
let rightAnswer3 =  ["A", "R", "G", "E", "N", "T", "I", "N", "O", "S"];

console.log("hi");

function addToCode(){
    codeValues = [];
    codeValues.push(document.getElementById("input1").value);  
    codeValues.push(document.getElementById("input2").value);   
    codeValues.push(document.getElementById("input3").value);   
    codeValues.push(document.getElementById("input4").value); 
    codeValues.push(document.getElementById("input5").value); 
    codeValues.push(document.getElementById("input6").value);  
    codeValues.push(document.getElementById("input7").value);
    codeValues.push(document.getElementById("input8").value);   
    codeValues.push(document.getElementById("input9").value); 
    codeValues.push(document.getElementById("input10").value);   
}

function save1(){
    let saveInput1 =  document.getElementById("input1").value;
    addToCode()   
    document.getElementById("input2").removeAttribute("disabled");
    document.getElementById("input2").focus();
    console.log(codeValues);
    console.log(saveInput1)
    if(saveInput1.length < 1){
        document.getElementById("input1").focus();
    }

}

function save2(){  
    let saveInput2 =  document.getElementById("input2").value;
    addToCode()   
    document.getElementById("input3").removeAttribute("disabled");
    document.getElementById("input3").focus();
    console.log(codeValues);
    if(saveInput2.length < 1){
        document.getElementById("input2").focus();
    }

}

function save3(){  
    let saveInput3 =  document.getElementById("input3").value;
    addToCode() 
    document.getElementById("input4").removeAttribute("disabled");
    document.getElementById("input4").focus();
    console.log(codeValues);
    if(saveInput3.length < 1){
        document.getElementById("input3").focus();
    }

}

function save4(){
    let saveInput4 =  document.getElementById("input4").value;
    addToCode()
    document.getElementById("input5").removeAttribute("disabled"); 
    document.getElementById("input5").focus(); 
    console.log(codeValues);
    if(saveInput4.length < 1){
        document.getElementById("input4").focus();
    }

}

function save5(){  
    let saveInput5 =  document.getElementById("input5").value;
    addToCode()
    document.getElementById("input6").removeAttribute("disabled"); 
    document.getElementById("input6").focus();
    console.log(codeValues);
    if(saveInput5.length < 1){
        document.getElementById("input5").focus();
    }

}

function save6(){  
    let saveInput6 =  document.getElementById("input6").value;
    addToCode()
    document.getElementById("input7").removeAttribute("disabled");  
    document.getElementById("input7").focus();
    console.log(codeValues);
    if(saveInput6.length < 1){
        document.getElementById("input6").focus();
    }

}

function save7(){    
    let saveInput7 =  document.getElementById("input7").value;
    addToCode()
    document.getElementById("input8").removeAttribute("disabled");
    document.getElementById("input8").focus();
    console.log(codeValues);
    if(saveInput7.length < 1){
        document.getElementById("input7").focus();
    }

}

function save8(){ 
    let saveInput8 =  document.getElementById("input8").value; 
    addToCode()
    document.getElementById("input9").removeAttribute("disabled");
    document.getElementById("input9").focus();
    console.log(codeValues);
    if(saveInput8.length < 1){
        document.getElementById("input8").focus();
    }

}

function save9(){  
    let saveInput9 =  document.getElementById("input9").value;
    addToCode()
    document.getElementById("input10").removeAttribute("disabled"); 
    document.getElementById("input10").focus(); 
    console.log(codeValues);
    if(saveInput9.length < 1){
        document.getElementById("input9").focus();
    }

}

function save10(){    
    let saveInput10 =  document.getElementById("input10").value;
    addToCode()   
    console.log(codeValues);
    if(saveInput10.length < 1){
        document.getElementById("input10").focus();
    }

}

function checkCode(){
    if(JSON.stringify(codeValues) == JSON.stringify(rightAnswer) || 
    JSON.stringify(codeValues) == JSON.stringify(rightAnswer2) ||
    JSON.stringify(codeValues) == JSON.stringify(rightAnswer3)){
        window.location.href="../portfolio/categorias.html";
        localStorage.setItem('state2', 'done')
    }else{
        $('#exampleModal').modal('show');
    }
}

$(window).on('load',function() {
    $("#spinner").fadeOut(800);
    $("#content").show(4000);

    function close1(){
        let state2 = localStorage.getItem('state2');
        console.log(state2)
        if(state2 === null){
            console.log('not done')
        }else if(state2 ==='done'){
            window.location.href="../portfolio/categorias.html";
        }
    }
    close1();
});