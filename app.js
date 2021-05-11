const box1 = document.querySelector(".box-container .box1");
const box2 = document.querySelector(".box-container .box2");
const box3 = document.querySelector(".box-container .box3");

// SCREEN //
const contentScreen = document.querySelector(".box-content-screen");
const contentScreenParagraphe = document.querySelector(".box-content-screen p");

const contentScreen2 = document.querySelector(".box-content-screen2");
const contentScreenParagraphe2 = document.querySelector(".box-content-screen2 p");

const contentScreen3 = document.querySelector(".box-content-screen3");
const contentScreenParagraphe3 = document.querySelector(".box-content-screen3 p");


// DYNAMICS LINES //
window.onload = function() {

	TweenMax.set("body", {opacity: 1});

	let tl1 = new TimelineMax();

	tl1

		.to(".ligne-1", 2, {width: "100%", ease:Circ.easeIn}, 1)

		.to(".ligne-2", 2, {height: "100%", ease:Circ.easeIn}, 1);		
		
}





box1.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.3, opacity: 0});
	gsap.to(box2, {duration: 0.3, opacity: 0});
	gsap.to(box3, {duration: 0.3, opacity: 0});

	gsap.to(contentScreen, {duration: 0.5, scale: 1});



			contentScreen.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.3, opacity: 1});
	gsap.to(box2, {duration: 0.3, opacity: 1});
	gsap.to(box3, {duration: 0.3, opacity: 1});

	gsap.to(contentScreen, {duration: 0.5, scale: 0});


});


});

box2.addEventListener("click", () => {
	gsap.to(box2, {duration: 0.3, opacity: 0});
	gsap.to(box1, {duration: 0.3, opacity: 0});
	gsap.to(box3, {duration: 0.3, opacity: 0});

	gsap.to(contentScreen2, {duration: 0.5, scale: 1});



			contentScreen2.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.3, opacity: 1});
	gsap.to(box2, {duration: 0.3, opacity: 1});
	gsap.to(box3, {duration: 0.3, opacity: 1});

	gsap.to(contentScreen2, {duration: 0.5, scale: 0});


});


});

box3.addEventListener("click", () => {
	gsap.to(box3, {duration: 0.3, opacity: 0});
	gsap.to(box1, {duration: 0.3, opacity: 0});
	gsap.to(box2, {duration: 0.3, opacity: 0});

	gsap.to(contentScreen3, {duration: 0.5, scale: 1});



			contentScreen3.addEventListener("click", () => {
	gsap.to(box1, {duration: 0.3, opacity: 1});
	gsap.to(box2, {duration: 0.3, opacity: 1});
	gsap.to(box3, {duration: 0.3, opacity: 1});

	gsap.to(contentScreen3, {duration: 0.5, scale: 0});


});


});






// MERCEDES PARFUMS SECTION //
let mercedes1 = document.querySelector(".img1");
let product1  = document.querySelector(".parfum1");
let product1_h2  = document.querySelector(".parfum1 h2");
let product2  = document.querySelector(".parfum2");
let product3  = document.querySelector(".parfum3");
let product4  = document.querySelector(".parfum4");


// PULSE //
mercedes1.classList.add("mercedes-img-pulse");



// Timeline created and paused
var tl = gsap.timeline({ paused: true });

function openNav() {
  animateOpenNav();
  
  product1.onclick = function (e) {
    // Toggle reversed to it's opposite value
    tl.reversed(!tl.reversed());
    // Use the toggle method in the classList API
    // product1.classList.toggle("active");
  };
}

function animateOpenNav() {
  
  tl.to(product1, {duration: 1, ease: "power3", x: 450, y: 270, scale: 1.8}, 0)
  tl.to(product1_h2, {duration: 1, opacity: 1}, 0)
  tl.to(product2, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
  tl.to(product3, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
  tl.to(product4, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
  .reverse(); // Finally reverse the timeline. reversed() is true
}

// init
openNav();