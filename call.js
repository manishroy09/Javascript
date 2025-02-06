// callback function 

//   function fun(add(){
    
//   });
  


// map function
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

let data = emp.map((e)=>{return e.name})
console.log(data);

let fdata = emp.filter((e)=>{return e.age>21})
console.log(fdata);
