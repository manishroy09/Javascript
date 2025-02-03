// object 



let ob = {
    name : "manish kumar",
    age : 21,
    city : "Bihar"
}
console.log(ob)

console.log(ob.name, ob.age, ob.city);


// nested object : we can use 

let person_student = {
    name:"manish kumar",
    age: 21,
    contact:1234,
    account_stat: {
        account_balance: 50000,
        account_no: 546363,

    },
    personal_details: {
        marital_status: "unmarrid",
        dob: "05-04-2003"
    },
    documents:[123,"324HG"],
    fun: function(name){
        alert("inside object "+name)
    }
}

console.log(person_student.account_stat.account_balance, person_student.documents[1]);
person_student.fun("manish");