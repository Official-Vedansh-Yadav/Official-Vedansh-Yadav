console.log("Welcome to my Website");

// Function to open the channel
function subscribe(){
    window.open("https://www.youtube.com/channel/UCqZcO_ImDpXTYnckCNRXb5A");
}

// function to open the videos of channel
function watch(){
    window.open("https://www.youtube.com/channel/UCqZcO_ImDpXTYnckCNRXb5A/videos");
}

// function for hamburger Nav Menu
var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var navlist = document.querySelector('.nav-list');
var rightNav = document.querySelector('.rightNav');

burger.addEventListener("click",()=>{
         navlist.classList.toggle('v-nav');
         rightNav.classList.toggle('v-nav');
         navbar.classList.toggle('h-nav');

})