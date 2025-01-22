 

 function collor(){
    let cont = document.getElementsByClassName('container')
    cont[0].classList.toggle('colorr')
 }


// querySelector -- it will solve the problem of taking index when class is targated
// querySelectorAll -- in this indexing is required 
// 


 let con1 = document.querySelector('.container1')
 con1.style.color = 'blue'

 let btn = document.querySelector('#btn')// select first node only 
 btn.addEventListener('click', function(){
   alert("add event fire")
 })