// list having 10 item 
// even list has background color 


let a = document.getElementsByTagName("li")



for(let i=0; i<9; i++){
    if(i%2==0){
        a[i].style.backgroundColor="red"
    }
}