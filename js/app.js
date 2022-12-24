/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener("DOMContentLoaded",buildnav)
const fragment = document.createDocumentFragment();
const list = document.getElementById("navbar__list");
function buildnav(){
  const all = document.querySelectorAll("section");
  for(const section of sections){
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}" class = "menu__link">${section.getAttribute("data-nav")}`
    listItem.innerHTML.classList.add("menu__link");
    listItem.innerHTML.addEventListener("click",evt=>{
      evt.preventDefault()
      section.scrollIntoView({
        behavior:"smooth"
      })
    })
    fragment.appendChild(listItem)
  }
  list.appendChild(fragment)
  
document.addEventListener("scroll",addHighLight)
  function addHighLight(){
for(const section of sections) {
  const top= section.getBoundingClientRect().top
  const title = section.getAttribute("data-nav");
  if(top>0 && top<250){
    section.classList.add("your-active-class")
  }else{
    section.classList.remove("your-active-class")
   }
  } 
 }
}
