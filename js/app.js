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
 * Define  Variables
*/
 
let allSections ;
let navItem ;
let allNavList;

/**
 * End  Variables
 * Start Helper Functions
 * 
*/

 allSections = document.querySelectorAll('section');	   //to select all sections
 navItem = document.getElementById('navbar__list');		  //select a nav element by it's id
 allNavList = document.querySelectorAll('.menu__link');  //to select all nav items

// create a nav bar menu 

let createNavFunc = function()
{
    allSections.forEach((section) => {	
	let addLink = "<li> <a data-nav=" + section.id + " class="+ "menu__link" + "> " + section.getAttribute('data-nav')+ "</a></li>";
	navItem.insertAdjacentHTML("beforeend", addLink);});
};


// Set the active section that is scrolled according to the section's id
 
let activeSection = function(activeStaus) {
    allNavList.forEach(item => {
		item.classList.remove('activeLi');
        item.classList.add('removeMouseHover');
        while (item.classList.contains(activeStaus) == true) {
            item.classList.add('activeLi');
            item.classList.remove('removeMouseHover');
            document.getElementById(activeStaus).classList.add('your-active-class');
        }
    })
}


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function() {
	allSections.forEach(function(section) {
    let setActive = navItem.querySelector("[data-nav= " + section.id +"]");
	if(section.getBoundingClientRect().top >= -200 && section.getBoundingClientRect().top <= 100)
	{
	setActive.classList.add("active-link");
    section.classList.add("your-active-class");
    }
    else
	{
    setActive.classList.remove("active-link");
	section.classList.remove("your-active-class");  
    }
	});
});



// Query select all li 
document.querySelectorAll('li').forEach(li => {
    li.addEventListener('mouseover', () => {
        li.classList.remove('removeMouseHover');

    })
});

document.querySelectorAll('li').forEach(li => {
    li.addEventListener('mouseout', () => {
        if (!li.classList.contains('activeLi')) {
            li.classList.add('removeMouseHover');

        }
    })
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// call create nav function
createNavFunc();


// call active section function
activeSection(allSections[0].getAttribute('id'));


/**
 * End Main Functions
 * Begin Events
 *
*/


// Event listener 
navItem.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document.getElementById(event.target.dataset.nav).scrollIntoView({ behavior: "smooth" });
    setTimeout(() => { location.hash = event.target.dataset.nav;}, 300);
  }
});




