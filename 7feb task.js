



function fun(){
  let name = document.querySelector('#name').value
  let age = document.querySelector('#age').value
  let contact = document.querySelector('#contact').value
  let address = document.querySelector('#address').value

  localStorage.setItem("name",name)
  localStorage.setItem("age",age)
  localStorage.setItem("contact",contact)
  localStorage.setItem("address",address)
  
}


function showdata(){
let name = localStorage.getItem("name");
let nam = document.querySelector('#nam')
nam.innerHTML = "My name is : "+name;


let age = localStorage.getItem('age')
let ag = document.querySelector('#ag')
ag.innerHTML = "My age is : "+age;

let contact = localStorage.getItem('contact')
let con = document.querySelector('#con')
con.innerHTML = "You can contact me on : "+contact;

let address = localStorage.getItem('address')
let ad = document.querySelector('#ad')
ad.innerHTML = "My address is : "+address;

}

function clearr(){
  localStorage.clear();
  location.reload();
}

//location.reload() == reload the page