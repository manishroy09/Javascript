

let emp = [
    {
        name: "manish",age:21,contact:1234,id:101
    },
    {
        name:"mohit", age: 22, contact:323, id:102
    },
    {
        name: "satyam", age: 22, contact: 3233, id:103
    }
]

console.log(emp);

let newobj = {
    namae: "vikash",
    age: 22,
    contact:2344,
    id:104
}

emp.push(newobj);
console.log(emp);

emp.pop();
console.log(emp);

emp.unshift(newobj);
console.log(emp);

emp.shift();
console.log(emp);

let peice = emp.slice(1,2)
console.log(peice);

emp.splice(1,1,newobj)
console.log(emp);










