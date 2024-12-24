
// even or odd

/*let n=parseInt(prompt("Enter any number :"))
  
 if(n%2==0){
    alert("true")
 }
  else{
    alert("false")
 }

// positive or negative or neutral
 let n1=parseInt(prompt("Enter any number :"))
  
 if(n1>0){
    document.write("positive")
 }
  else if(n1<0){
    document.write("negative")
 }
  else{
    document.write("neutral")
 }


 let n2=parseInt(prompt("Enter any age :"))
  
 if(n2>18){
    console.log("eligible for voting")
 }
  else{
    console.log("not eligible for voting")
 }*/
// take no. and perform operation addition if choice is 1 , subtraction if 2,multiplication 3 , division if 4

/*let n3=parseInt(prompt("Enter choice :"))
let n4=parseInt(prompt("Enter first number :"))
let n5=parseInt(prompt("Enter second number:"))
  
 if(n3==1){
    document.write("Addition of two number" , n4+n5)
 }
  else if(n3==2){
    document.write("Subtraction of two number ", n4-n5)
 }
 else if(n3==3){
    document.write("Multiplication of two number " , n4*n5)
 }
 else if(n3==4){
    document.write("Division of two number " , n4/n5)
 }
else{
    document.write("Invalid choice")
}
//nasted if else
let age=parseInt(prompt("Enter your age : "))
if(age>=18){
    let n=parseInt(prompt("p 1 for indian "))
    if(n==1){
        alert("eligible")
    }
    else{
        alert("Not eligible")
    }
}
else{
    alert("You are child")
}*/

let num=parseInt(prompt("Enter choice :"))
let n2=parseInt(prompt("Enter first number :"))
let n3=parseInt(prompt("Enter second number:"))

switch(num){
   case '+':
      alert(n2+n3)
      break;

   case '-':
      alert(n2-n3)
      break;
   case '*':
      alert(n2*n3)
      break;
    case '/':
      alert(n2/n3)
      break;
      default:
         alert("invalid choise");

}
  


