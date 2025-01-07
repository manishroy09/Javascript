
// to change image using event 
function fun2(){
    let img = document.getElementById('image')
    img.src = "png.jpeg"
    
}


function fun1(){
    let img = document.getElementById('image')
    img.src = "image.jpeg"
}


/*// to change background color
// if u have multiple function
function red(){
    document.body.style.backgroundColor = "red"

}

function blue(){
    document.body.style.backgroundColor = "blue"
}

function yellow(){
    document.body.style.backgroundColor = "yellow"
}

function green(){
    document.body.style.backgroundColor = "green"
}
*/

// using with argument 
// when we call only one function in multiple button or node
function red(color){
    document.body.style.backgroundColor = color 
}


// using css change in html file by taking events
function dark(){
    let para = document.getElementById('para')
    para.classList.add('drk')  // add class from css directly to js
}
