// destructing of array 
let [name,age,city,course] = ["Hiresh", 23, "bhopal","FSD"]
console.log(name,age);

// spread operator

let ar1=[1,2,3,4,]
let ar2=[6,7,8,9]

let ar3 = [...ar1, ...ar2]
console.log(ar3);

// wap  1 to 10 element in array square of even element;

let ar4 = [1,2,3,,4,5,6,7,8,9,10]
 let ar5 = []
for(let i=0; i<10; i++){
    if(ar4[i]%2==0){
       ar5.push(ar4[i]*ar4[i])
    }
}

console.log(ar5);