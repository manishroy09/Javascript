


function validate(){
    let name = document.getElementById('name').value 
    let age = document.getElementById('age').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let cpass = document.getElementById('cpassword').value
    if(name == ""){
        alert('please fill the name')
        document.getElementById('name').focus()
        
        return false
    }
    else if(age == ""){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "please fill this field"
        document.getElementById('age').focus()
        return false
    }

    else if( isNaN(age)){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Age should be in number"
        let ag = document.getElementById('age')
        ag.style.border = "2px solid red"
        return false
    }
    else if( contact == ""){
        alert('please enter contact number')
        document.getElementById('contact').focus()
        return false
    }

    else if( isNaN(contact)){
        alert('contact number  should be in digits')
        document.getElementById('contact').style.border = "2px solid red"
        return false
    }
    else if( contact.length>10 || contact.length<10){
        alert('Enter valid number , with 10 digit')
        document.getElementById('contact').style.border = "2px solid red"
        return false
    }
    else if( email == ""){
        alert('please enter email')
        document.getElementById('email').focus()
        return false
    }
    else if(!(email.includes('@'))){
        alert('please enter valid email')
        document.getElementById('email').focus()
        return false
    }
    else if( pass == ""){
        alert('please enter password')
        document.getElementById('password').focus()
        return false
    }
    else if( !(pass.match(/[~!@#$%^&*]/)) ){
        alert('please include special character')
        document.getElementById('password').focus()
        return false
    }
    else if( cpass == ""){
        alert('please enter confirm password')
        document.getElementById('cpassword').focus()
        return false
    }
    else if( cpass != pass ){
        alert('Password mismatch')
        document.getElementById('cpassword').focus()
        return false
    }

}

// here focus in the function which provide focused to the targate node

// formvalidation is used to submit validate form  only 

