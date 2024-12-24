

/*let a=20;

do{

    console.log(a);
    a--;

}while(a>4);

//1 . inpute frome user if inpute is other then 0 then it take inpute frome user again if input is  0 then terminat

// write a program to  take inpute frome the user and check number is even or odd  if no is even then print the table of that no. uf no is odd then   print the cuibe of that no 



let num=parseInt(prompt("Enter a number :"))

if(num%2==0){
    let a=1;
  while(a<=10){
    console.log(num*a);
    a++;
  }
}
else{
    console.log(num*num*num);
}*/
    
//write program to print square of all odd numbers between 15 to 1;


let a=15;
while(a>=1){
    if(a%2!=0){
      console.log(a*a);
    }
    a--;
}