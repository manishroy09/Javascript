//  for targat id

let head = document.getElementById("head")
 console.log(head)

 document.write("<h1> hello from js </h1> ")
 document.write(" helllo from js ")

// for target class 
// return nod list in array formate 

let ctarget = document.getElementsByClassName("contant2")
console.log(ctarget);

ctarget[1].innerHTML = " <i> yes changed </i> "
ctarget[0].textContent = " happy new year "

ctarget[0].textcontent = "  yesterday is happy new year "

// for  targat tag 


let para = document.getElementsByTagName("p")
console.log(para);

para[3].innerHTML = " <i> yes changed </i> "



