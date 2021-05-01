let container = document.querySelector(".container");
let title = document.querySelector("h1");
let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let b3 = document.querySelector(".box3");

// BOUTONS //
let btn = document.querySelector(".btn");
let btnBack = document.querySelector(".btn1");
let btnMd = document.querySelector(".btnMd");
// MENU //
let menu = document.querySelector(".menu");
let menuItems = document.querySelector(".item");
// IMAGES //
let vignette = document.querySelectorAll(".vignette");




btn.addEventListener("click", () => {
  gsap.to(title, {opacity: 1, x: -350, y: -90, scale: 1.5, duration: 1, ease: "power1"});
  
  gsap.to(b1, {y: -120, duration: 1, ease: "power1"});
  gsap.to(b2, {x: -130, duration: 1, ease: "power1"});

  gsap.to(b3, {keyframes: [
  							{duration: 0.8, x: 560},
    						{duration: 0.8, y: -140},
    						{duration: 0.8, scale: 4}
  							]});
  gsap.to(vignette, {opacity: 1, duration: 1, delay: 1.5});

  gsap.to(btn, {opacity: 0, duration: 1.8});
  gsap.to(btnBack, {opacity: 1, duration: 1.8, delay: 1.8});
})


btnBack.addEventListener("click", () => {
  gsap.to(title, {opacity: 1, x: 0, y: 0, scale: 1,duration: 1.3});
  
  gsap.to(b1, {y: 0, duration: 1, ease: "power1"});
  gsap.to(b2, {x: 0, duration: 1, ease: "power1"});

  gsap.to(b3, {keyframes: [
  							{duration: 0.8, scale: 1},
  							{duration: 0.8, y: 0},
  							{duration: 0.8, x: 0}
  							]});
  gsap.to(vignette, {opacity: 0, duration: 0.2});

  gsap.to(btn, {opacity: 1, duration: 1, delay: 1.8});
  gsap.to(btnBack, {opacity: 0, duration: 1.8, delay: 0.2});
})


// MAX-WIDTH(768PX)
b3.addEventListener("click", () => {
  b3.classList.toggle("moveB3");
  b3.classList.toggle("move1");

});

b2.addEventListener("click", () => {
  b2.classList.toggle("moveB2");
  b2.classList.toggle("move1");

  b3.classList.toggle("noMove");
  b1.classList.toggle("noMove");
  // gsap.to(b2, {y: 30});
  // gsap.to(b3, {y: -33});


  // gsap.to(b3, {height: 100});
  // gsap.to(b2, {height: 500});
  // gsap.to(b1, {height: 100});
});


b1.addEventListener("click", () => {
  b1.classList.toggle("moveB1");
  b1.classList.toggle("move1");

  b3.classList.toggle("noMove");
  b2.classList.toggle("noMove");
  // gsap.to(b3, {height: 100});
  // gsap.to(b2, {height: 100});
  // gsap.to(b1, {height: 500});
});



// MENU //
gsap.fromTo(menu, {y: -120, opacity: 0}, 
                  {y: 3, opacity: 1, duration: 1.5});
gsap.from(".item ,.item1, .item2", {opacity: 0, duration: 5, delay: 2});



// MAX-WIDTH (360px) //
let containerMd = document.querySelector(".container-md");
let h1Md        = document.querySelector("h1-md");
let box1Md      = document.querySelector(".box1-md");
let box2Md      = document.querySelector(".box2-md");
let box3Md      = document.querySelector(".box3-md");

// ANIMATIONS 
box3Md.addEventListener("click", () => {
  gsap.to(box3Md, {keyframes: [
          {duration: 0.5, width: 30},
          {duration: 0.5, x: 30}, 
          {duration: 0.6, y: -130},
          {duration: 0.8, height: 380, width: 270}, 
          
    ]});

  // gsap.to(h1Md, {scale: 2});
  gsap.to(box1Md, {width: 30, x:-150, duration: 0.7});
  gsap.to(box2Md, {width: 30, x:-150, duration: 0.7});


});