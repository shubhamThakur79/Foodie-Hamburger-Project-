function openMenu() {
    let nav = document.querySelector("nav");
    let icon = document.querySelector(".fa-bars");
    
    // Toggle the fa-x class
    icon.classList.toggle("fa-x");

    // Check if the icon has the fa-x class
    if (icon.classList.contains("fa-x")) {
        // Show the nav bar
    nav.style.right = "0px";
        
        
        // Add event listener to hide nav bar on click
        icon.addEventListener("click", ()=> {
           
            icon.classList.add("fa-bars");
            
            // Remove this event listener once it's done to prevent multiple listeners
        
        });
    } else {
        // If the icon doesn't have fa-x class, hide the nav bar
        nav.style.right = "-700px";
    }
}
