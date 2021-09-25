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
 * Define Global Variables
 * 
*/
//  section global variable
const sections = document.querySelectorAll('section'); 
//  links navbar variable
const mainUl = document.getElementById('navbar__list');


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

function myFunction (){
   // loop for all sections
   for (let i = 0 ; i < sections.length ; i ++ ) {
      let selectedLi =sections[i].getAttribute('data-nav');
      let SectionId = sections[i].getAttribute('id');
      let myLi = document.createElement('li');
      // add the text for items
      myLi.innerHTML = `<a href ='#${SectionId}'>${selectedLi}</a>`;
      // add class for items to take same style
      myLi.classList.add('menu__link');
      // append all elemnts of links to list
      mainUl.appendChild(myLi);  
   };
};
myFunction ();

// Add class 'active' to section when near top of viewport
//  check section in the viewport
function selectedSection (move) {
   let selectedSectionlocation = move.getBoundingClientRect();
   return (selectedSectionlocation.top >= 0 && selectedSectionlocation.top <= 400);
};

function toggleMyClass() {
   sections.forEach(function (section){
      // if section in the viewport
      if(selectedSection(section)){
         // check if hasn't active class 
         if (!section.classList.contains('your-active-class')){
            // add the  active class
            section.classList.add('your-active-class')
         };
      } else {
         //  if has the active class remove the  active class
            section.classList.remove('your-active-class')
         };
   });
};


// Scroll to anchor ID using scrollTO event
document.addEventListener ('scroll',toggleMyClass );

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


