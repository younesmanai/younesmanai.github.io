let title = document.querySelector("h1");
let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let b3 = document.querySelector(".box3");

// BOUTONS //
let btn = document.querySelector(".btn");
let btnBack = document.querySelector(".btn1");
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
  							{duration: 0.8, x: 720},
    						{duration: 0.8, y: -130},
    						{duration: 0.8, scale: 5.}
  							]});
  gsap.to(vignette, {opacity: 1, duration: 1, delay: 1.5});

  gsap.to(btn, {opacity: 0, duration: 1.8});
  gsap.to(btnBack, {opacity: 1, duration: 1.8, delay: 1.8});
})


btnBack.addEventListener("click", () => {
  gsap.to(title, {opacity: 1, x: 0, y: 0, color: "black", duration: 1});
  
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






// MENU //
gsap.fromTo(menu, {y: -120, opacity: 0}, 
                  {y: 3, opacity: 1, duration: 1.5});
gsap.from(".item ,.item1, .item2", {opacity: 0, duration: 5, delay: 2});