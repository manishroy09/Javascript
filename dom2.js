
// .createElement is used to make element using js

let head = document.createElement('h1')

head.textContent = "Hi I'm developer ...!!!"

let bd = document.body 
bd.append(head) // .append is used to insert child inside body of html
bd.setAttribute('bgcolor', 'red' )


// .setAttribute take two argument one is attribute and second is values 
// setAttribute is use link styling in the element inserted 
head.setAttribute('align' , 'center')

let name = document.getElementById('head2')
name.removeAttribute('align')
name.setAttribute('style', "background-color: blue; color: white; text-align: center")