 
// loops


 //Q1 write program to print no. from 20 to 5 using do while loop 
/*
 let a=20;
 do{
    console.log(a);
    a--;
 }while(a>=5);

 // Q2write a program take inpute frome user if ipute is even  then print table and if inpute is odd then print cubic of the number
 // do while loop

  let num=parseInt(prompt("Enter any number : "))
  
  if(num%2==0){
     let a=1;
     while(a<=10){
        console.log(num*a);
        a++;
     }
  }
  else{
    console.log(num*num*num);
  }

 //Q3 for home work write a program to printe square of odd no. from 15 to 1 

 let a=15;
 while(a>=1){
    if(a%2!=0){
        console.log(a*a);
    }
    a--;
 }*/

 

 
 //Q4 write a program to take input frome user if inpute is other  then 0 then take inpute again if inpute is 0 then terminate the code
// for home work
let num=parseInt(prompt("Enter any number:"))
let a=0;
while(num!=0){
   num=parseInt(prompt("Enter number again :"));
   a++;
}



 
