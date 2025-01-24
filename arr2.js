

let ar = ['q', 12, "cybrom"]
ar.push("manish" ,"hello")// insert data at last position
//console.log(ar)


ar.pop() // remove data from last position 
//console.log(ar)


ar.unshift("hii", "logo") // insert data in first position
//console.log(ar);


ar.shift()  // remove data from first position
//console.log(ar);

// slice function 

let ar1 = ["manish kumar", 23,123, "Bhopal", "MP","India", 28];
//console.log(ar1)

//let peice = ar1.slice(1,3)
//console.log(peice);

// splice use to delete or insert element in the array at any position 
 // 3. argument -- 1. indexing , 2. number of element wanted to delete , 3. inserting data


ar1.splice(1,0,"cybrom")
console.log(ar1);

