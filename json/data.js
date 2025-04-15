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
    <td> <button onclick="mydel('${e.id}')"> Delete </button></td>
    <td><button onclick= "myedit( '${e.id}') "> EDIT </button> </td>
    </tr>
    `
).join("")

document.getElementById('display').innerHTML = tdata;
}

fetdata();

function mydel(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
        })
    .then(r=>alert("Delete successfuly....!!!!"))

}

function insertdata(){
    let frmdata = {
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }
    fetch('http://localhost:3000/student',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert("data inserted....!!!!"))
}

async function myedit(id) {

    let edata = await fetch(`http://localhost:3000/student/${id}`)
    let fdata = await edata.json()

    let frm = `
    <input type="text" value=" ${fdata.name}" id="name"> <br><br>
    <input type="text" value=" ${fdata.age}" id="age"> <br><br>
    <input type="text" value=" ${fdata.contact}" id="contact"> <br><br>
    <input type="text" value=" ${fdata.city}" id="city"> <br><br>

    <input type="submit" onclick = "finalupdate('${fdata.id}')">
    `
   document.querySelector('#showedit').innerHTML =frm ;
}

function finalupdate(id) {

    let final = {

        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value
    }

    fetch(`http://localhost:3000/student/${id}`, {
  
        method:'PUT', 
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(final)
    })
    .then(r=>alert ("data update sucsses"))
}