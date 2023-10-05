// Navbar Toogle for All Pages ******************************
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuBtn = document.querySelector("button.menu_toggle");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
if(top>= offset && top < offset + height){
  navLinks.forEach(links => {
    links.classList.remove('active');
    documents.querySelector('header nav a[href*=' + id + ']').classList.add('active');


  });

}

  });

}
// Hide Navbar on Scroll ******************************

let navBar = document.querySelector("header");
let scrollPos = 0;

window.addEventListener("scroll", () => {
  let scrollPosNow = window.pageYOffset || document.pageYOffset;

  if (scrollPosNow > scrollPos) {
    navBar.style.transform = "translateY(-100%)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  scrollPos = scrollPosNow;
});

// Add Your Scripts Here:
// <Topic/Explain> ******************************

//events
// JavaScript to handle toggling between upcoming and past events
document.addEventListener("DOMContentLoaded", function () {
  const upcomingEventsLink = document.getElementById("upcoming-events-link");
  const pastEventsLink = document.getElementById("past-events-link");
  const upcomingEventsSection = document.getElementById("upcoming-events");
  const pastEventsSection = document.getElementById("past-events");

  // Show upcoming events by default
  upcomingEventsLink.classList.add("active-link");
  upcomingEventsSection.classList.add("active-section");

  // Toggle to show upcoming events
  upcomingEventsLink.addEventListener("click", function (e) {
    e.preventDefault();
    upcomingEventsLink.classList.add("active-link");
    pastEventsLink.classList.remove("active-link");
    upcomingEventsSection.classList.add("active-section");
    pastEventsSection.classList.remove("active-section");
  });

  // Toggle to show past events
  pastEventsLink.addEventListener("click", function (e) {
    e.preventDefault();
    upcomingEventsLink.classList.remove("active-link");
    pastEventsLink.classList.add("active-link");
    upcomingEventsSection.classList.remove("active-section");
    pastEventsSection.classList.add("active-section");
  });
});

//smooth transitions
