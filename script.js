//hamburger icon
let hamburger = document.querySelector(".hamburger")
//close icon
let close = document.querySelector(".close")
//navigation
let nav = document.querySelector(".nav-mobile")


//action when is clicked on hamburger 
hamburger.addEventListener("click", function(e){
    
   nav.style.visibility = "visible"
   hamburger.style.display = "none"
   close.style.display= "block"
   
})



//action when is clicked on close
close.addEventListener("click", function(e){
  
    nav.style.visibility = "hidden"
    hamburger.style.visibility = "visible"

window.location.reload()

})

