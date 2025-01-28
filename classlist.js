function add(){
    let head = document.getElementById('head')
    head.classList.add('dark')
}

function rem(){
    let head = document.getElementById('head')
    head.classList.remove('dark')
}

let head1 = document.getElementById('head')
function both(){
    
    document.body.classList.toggle('dark')

    head1.classList.toggle('dark')
}