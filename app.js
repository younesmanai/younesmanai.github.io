console.clear();

var ww = window.innerWidth;
var wh = window.innerHeight;


let parfum1 = document.querySelector(".parfum1");
// // MERCEDES PARFUMS SECTION //
let mercedes1 = document.querySelector(".img1");

let product1_h2  = document.querySelector(".parfum1 h2");
let parfum2  = document.querySelector(".parfum2");
let parfum3  = document.querySelector(".parfum3");
let parfum4  = document.querySelector(".parfum4");


// // PULSE //
// mercedes1.classList.add("mercedes-img-pulse");

parfum1.addEventListener("click", () => {
gsap.to(".parfum1", {
  // motionPath:{
  //   path:[ {x:-ww*0.2, y:-wh*0.5}, {x:0, y:-wh-50}], 
  //   curviness:1
  // },
  duration:1,
  x:450,
  y: 200,
  scale: 2.3,
  ease:"none"
});
gsap.to("span", {

  duration:1,
  opacity: 1,
  scale: 0.1,
  ease:"none"
});
gsap.to(parfum2, {opacity: 0});
gsap.to(parfum3, {opacity: 0});
gsap.to(parfum4, {opacity: 0});

});

// Matches settings
var portraitLandscape = window.matchMedia("(orientation: landscape)");
var mobile = window.matchMedia("(max-width: 768px)");
var tabletPortrait = window.matchMedia("(max-width: 991px)");
var tabletLandscape = window.matchMedia("(max-width: 1199px)");

if(portraitLandscape.matches) {
   // Loaded to landscape
} else {
    // Loaded to portrait
}

if(mobile.matches) {
    // Loaded to Mobile format
}
if(tabletPortrait.matches) {
    // Loaded to tabletPortrait format
}
if(tabletLandscape.matches) {
    // Loaded to tabletLandscape format
}else{
    // Loaded to greater than 1199px
}

// Manage orientation
portraitLandscape.addListener(function(m) {
    if(m.matches) {
        // Changed to landscape
    } else {
        // Changed to portrait
    }
});
// Manage mobile
mobile.addListener(function(m) {
    if(m.matches) {
        // Change to Mobile format
    }
});
// Manage tabletPortrait
tabletPortrait.addListener(function(m) {
    if(m.matches) {
        // Change to tabletPortrait format
    }
});
// Manage tabletLandscape
tabletLandscape.addListener(function(m) {
    if(m.matches) {
        // Change to tabletLandscape format
    }else{
        // Change to greater than 1199px
    }
});



















// const box1 = document.querySelector(".box-container .box1");
// const box2 = document.querySelector(".box-container .box2");
// const box3 = document.querySelector(".box-container .box3");

// // SCREEN //
// const contentScreen = document.querySelector(".box-content-screen");
// const contentScreenParagraphe = document.querySelector(".box-content-screen p");

// const contentScreen2 = document.querySelector(".box-content-screen2");
// const contentScreenParagraphe2 = document.querySelector(".box-content-screen2 p");

// const contentScreen3 = document.querySelector(".box-content-screen3");
// const contentScreenParagraphe3 = document.querySelector(".box-content-screen3 p");


// // DYNAMICS LINES //
// window.onload = function() {

// 	TweenMax.set("body", {opacity: 1});

// 	let tl1 = new TimelineMax();

// 	tl1

// 		.to(".ligne-1", 2, {width: "100%", ease:Circ.easeIn}, 1)

// 		.to(".ligne-2", 2, {height: "100%", ease:Circ.easeIn}, 1);		
		
// }





// box1.addEventListener("click", () => {
// 	gsap.to(box1, {duration: 0.3, opacity: 0});
// 	gsap.to(box2, {duration: 0.3, opacity: 0});
// 	gsap.to(box3, {duration: 0.3, opacity: 0});

// 	gsap.to(contentScreen, {duration: 0.5, scale: 1});



// 			contentScreen.addEventListener("click", () => {
// 	gsap.to(box1, {duration: 0.3, opacity: 1});
// 	gsap.to(box2, {duration: 0.3, opacity: 1});
// 	gsap.to(box3, {duration: 0.3, opacity: 1});

// 	gsap.to(contentScreen, {duration: 0.5, scale: 0});


// });


// });

// box2.addEventListener("click", () => {
// 	gsap.to(box2, {duration: 0.3, opacity: 0});
// 	gsap.to(box1, {duration: 0.3, opacity: 0});
// 	gsap.to(box3, {duration: 0.3, opacity: 0});

// 	gsap.to(contentScreen2, {duration: 0.5, scale: 1});



// 			contentScreen2.addEventListener("click", () => {
// 	gsap.to(box1, {duration: 0.3, opacity: 1});
// 	gsap.to(box2, {duration: 0.3, opacity: 1});
// 	gsap.to(box3, {duration: 0.3, opacity: 1});

// 	gsap.to(contentScreen2, {duration: 0.5, scale: 0});


// });


// });

// box3.addEventListener("click", () => {
// 	gsap.to(box3, {duration: 0.3, opacity: 0});
// 	gsap.to(box1, {duration: 0.3, opacity: 0});
// 	gsap.to(box2, {duration: 0.3, opacity: 0});

// 	gsap.to(contentScreen3, {duration: 0.5, scale: 1});



// 			contentScreen3.addEventListener("click", () => {
// 	gsap.to(box1, {duration: 0.3, opacity: 1});
// 	gsap.to(box2, {duration: 0.3, opacity: 1});
// 	gsap.to(box3, {duration: 0.3, opacity: 1});

// 	gsap.to(contentScreen3, {duration: 0.5, scale: 0});


// });


// });






// // MERCEDES PARFUMS SECTION //
// let mercedes1 = document.querySelector(".img1");
// let product1  = document.querySelector(".parfum1");
// let product1_h2  = document.querySelector(".parfum1 h2");
// let product2  = document.querySelector(".parfum2");
// let product3  = document.querySelector(".parfum3");
// let product4  = document.querySelector(".parfum4");


// // PULSE //
// mercedes1.classList.add("mercedes-img-pulse");



// // Timeline created and paused
// var tl = gsap.timeline({ paused: true });

// function openNav() {
//   animateOpenNav();
  
//   product1.onclick = function (e) {
//     // Toggle reversed to it's opposite value
//     tl.reversed(!tl.reversed());
//     // Use the toggle method in the classList API
//     // product1.classList.toggle("active");
//   };
// }

// function animateOpenNav() {
  
//   tl.to(product1, {duration: 1, ease: "power3", x: 450, y: 270, scale: 1.8}, 0)
//   tl.to(product1_h2, {duration: 1, opacity: 1}, 0)
//   tl.to(product2, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
//   tl.to(product3, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
//   tl.to(product4, {duration: 1, ease: "power3", x: -200, scale: 0.7}, 0)
//   .reverse(); // Finally reverse the timeline. reversed() is true
// }

// // init
// openNav();