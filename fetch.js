async function Demo() {
    let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")
    let fdata  = await apidata.json()
    let api = document.querySelector('#apidata')
    let dt = fdata.map((e)=>{return e.name +e.id + e.email +"\n" })
    // console.log(fdata)
    api.innerHTML = dt
}

Demo();