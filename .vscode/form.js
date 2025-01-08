
function formdata(){
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)

    let output = document.getElementById('ans')
    output.innerHTML = num1+num2
    return false // to stop form submission
}

document.body.style.backgroundColor = 'pink'

// return used with function calling in html  that will appere the ans 