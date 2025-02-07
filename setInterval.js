
//  let interval = setInterval(()=>{document.write("I am here"),document.write("<br>")},1000)
var st =0;
let count = document.getElementById('count')
function start(){
 var c =0;
 
 st = setInterval(()=>{
    count.innerHTML = c++
 },1000)
}

function stop(){
    clearInterval(st);
}

function reset(){
    clearInterval(st);
    count.innerHTML = 0;
}


// Q1. reset button that will 