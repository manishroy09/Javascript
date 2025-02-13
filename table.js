
async function datafatching() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let resdata = await data.json()

    let fdata = resdata.map((e)=>`
    <tr>
    <td> ${e.id}</td>
    <td> ${e.title}</td>
    <td> ${e.body}</td>
    </tr>
    `).join("")
    document.querySelector('#showdata').innerHTML = fdata
}

datafatching();


//Q1. what is eventbubbling. 


//Q2. what is event deligation .