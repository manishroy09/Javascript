//Q1 different between parameter and argument (home work)

// ans-- a parameter is a variable defined in a function or method, while an argument is the value passed to that function or method when it is called

// for function arguent is work as a input.
// function is a block of code 0r set of instruction 

// reusability is the property of function 

// function must have 
// 1.function declaration
// 2.function defination
// 3.function calling 
// .function is two type  --- 1. is pre defined 2. user defined

// user defined ---
//1.without argument and no return values

/*
function add(){
    console.log("hello inside funtion")
}

add()


// wap to add two numbers 
 let a=parseInt(prompt("Enter number 1"))
 let b=parseInt(prompt("Enter number 2"))
 function add(){
    alert(a+b);
 }
 add()



// wap to print a table of any number using function

let n=parseInt(prompt("Enter any number"))
function Table(){
    
    for(let t=1; t<=10; t++ ){
        console.log(n*i)
    }
}
Table()


// wap to take a input from the user if no is 11-20 then print no from 1 to that number . if no is 1 to 10 then print no. from 15 to 1;


let n1=parseInt(prompt("Enter any number"))
function count(){
  if(n1>=11 && n1<=20){
      for(let i=1; i<=n1; i++ ){
        console.log(i);
      }
  }
  else if(n1>=1 && n1<11){
    for(let i=15; i>=1; i--){
        console.log(i);
    }
  }

}
count()


// wap to print sum of all numbers between 1 to 12

let s=0;
function sum(){
    for(let i=1; i<13; i++){
    s=s+i;
    }
    console.log(s);
}
sum()
// date 30th dec 2024

// 1 wap to add two number using type 2 (with argument and no  return values )

function add(a,b){
    
    console.log(a+b);
}

let num1=parseInt(prompt("Enter number one"))
let num2=parseInt(prompt("Enter number second"))
add(num1,num2)


// without argument and return values

function demo(){
   return "Manish"
}
   let a= demo()
   console.log(a);

   // or

   console.log(demo());
   
  // with argument and with return valuse

  function code(a){
    return a*a;
  }

  let b=code(2)
  if(b%2==0){
    alert("even")
  }
  else{
    alert("odd")
  }

 //or 
 
 console.log(code(10));
 */

 //q1. take a no from user find cube then print stars right angal trangle using return vales


 function cube(a){
  return a*a*a;
 }
   
 let b=parseInt(prompt("Enter a number"))

 let c=cube(b);

 for(let r=0; r<=c; r++){
      for(let s=0; s<=r; s++){
        document.write("*")
      }
      document.write("<br>");
 }