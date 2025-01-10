function line1(){
    let a = parseInt(prompt('how much sets do you want to buy .'))
    
    let amount = document.getElementById('final')
    amount.innerHTML = "Total amount to pay \u20B9" +a*400
    document.body.style.backgroundColor = 'rgba(73, 12, 64, 0.808)'
    let icon = document.getElementsByTagName('i')
    icon.classList.add('icon')

}

function center1(){
    let a = parseInt(prompt('how much sets do you want to buy .'))
    let amount = document.getElementById('final')
    amount.innerHTML = "Total amount to pay \u20B9" +a*350 
    document.body.style.backgroundColor = 'rgba(125, 38, 32, 0.808)'
}

function line2(){
    let a = parseInt(prompt('how much sets do you want to buy .'))
    let amount = document.getElementById('final')
    amount.innerHTML = "Total amount to pay \u20B9" +a*250 
    document.body.style.backgroundColor = 'rgba(52, 52, 13, 0.808)'
}


function line3(){
    let a = parseInt(prompt('how much sets do you want to buy .'))
    let amount = document.getElementById('final')
    amount.innerHTML = "Total amount to pay \u20B9" +a*300 
    document.body.style.backgroundColor =' rgba(14, 44, 26, 0.808)'
}

function center3(){
    let a = parseInt(prompt('how much sets do you want to buy .'))
    let amount = document.getElementById('final')
    amount.innerHTML = "Total amount to pay \u20B9" +a*200 
    document.body.style.backgroundColor = 'rgba(17, 43, 44, 0.808)'
}

