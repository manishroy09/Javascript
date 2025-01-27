
function fun() {

let ob = {
    name : document.querySelector('#name').value,
    age : document.querySelector("#age").value,
    dob : document.querySelector('#dob').value,
    phone : document.querySelector('#number').value,
    address : document.querySelector('#address').value
}

console.log(ob.name, ob.age,"\n", ob.dob, ob.phone, ob.address);

return false;

}