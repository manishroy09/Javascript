
// set Item

localStorage.setItem("name","Manish")
localStorage.setItem("age", 21)

// get Itme
let age = localStorage.getItem("age")
alert(age)

let fname ="manish kumar"
localStorage.setItem("fname",fname)

// removeItem
localStorage.removeItem("fname")

localStorage.clear()


//form 4 feilds name, address, mobile no ., city 



function fun(){
    let name = document.querySelector('#name').value
    let address = document.querySelector('#address').value
    let mobile = document.querySelector('#mobile').value
    let city = document.querySelector('#city').value
localStorage.setItem("name",name)
localStorage.setItem("address",address)
localStorage.setItem("mobile",mobile)
localStorage.setItem("city",city)

    return false
}

//Q1. one form other page will 