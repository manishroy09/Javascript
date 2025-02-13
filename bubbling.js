// Get the referance of elements
var outer = document.getElementById('outer')
var inner = document.getElementById('inner');
var button = document.getElementById('mybutton');

// Attach event handlers with elements 
outer.addEventListener("click",handleBubbling);
inner.addEventListener("click",handleBubbling);
button.addEventListener("click",handleBubbling);

function handleBubbling(event){
    console.log("Bubbling:" +this.id);
}