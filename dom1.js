 let heading1 = document.getElementById('headcontant')

 heading1.innerHTML = " <i> manish is here </i> "// it will apply tags and change contant also 

 heading1.textContent = "I am manish " // it can only change contant not apply tags


 // to change in css 
 heading1.style.color =" red"
 heading1.style.backgroundColor = "blue"
 heading1.style.padding = "20px"

 

// if wanted to change in image then we use .src then link address after = 
 let flimg = document.getElementById('flowerimage')
 flimg.src = "png.jpeg"