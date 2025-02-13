async function fetdata() {
    let data = await fetch('http://localhost:3000/student')
    let fdata = await data.json();
    let tdata = fdata.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    </tr>
    `
).join("")

document.getElementById('display').innerHTML = tdata;
}

fetdata();