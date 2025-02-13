var parentList = document.getElementById('myList');

// Attached event handler to parent element 
parentList.addEventListener("click", handleItemClick);

// Event handler function 
function handleItemClick(event){
    var target = event.target;
    console.log("clicked : ",target.textContent);
}