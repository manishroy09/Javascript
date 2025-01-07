function add(){
    let head = document.getElementById('head')
    head.classList.add('dark')
}

function rem(){
    let head = document.getElementById('head')
    head.classList.remove('dark')
}

function both(){
    let head = document.getElementById('head')
    document.body.classList.toggle('dark')

    head.classList.toggle('dark')
}