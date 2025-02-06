var obj = {};


function fun(){

     obj = {
        id : document.querySelector('#id').value,
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        contact : document.querySelector('#contact').value
    } 

    return false;
  
}

function show(){
    console.log(obj)
}




