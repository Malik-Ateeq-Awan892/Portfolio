var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
   
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById('sidemenu');
var menuIcon = document.querySelector(".fas.fa-bars");
function openmenu(){
    sidemenu.style.right ="0";
    menuIcon.style.opacity = "0";
}

function closemenu(){
    sidemenu.style.right ="-200px";
    menuIcon.style.opacity = "1";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzZQSFfCQa15uhp7xcciMUtEQQip2gQ1UVvT5Cwd39cW98WXPdHlcSPzENTeAHrGjKp/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        msg.innerHTML = "Form Submitted Successfully";
        setTimeout(function() {
          msg.innerHTML = "";
        }, 1000);
        form.reset();
    })
    .catch(error => { console.error('Error occurred during form submission:', error.message); });
});

function revealToSpan(){
  document.querySelectorAll(".reveal")
  .forEach(function(elem){
      var parent = document.createElement("span");
      var child = document.createElement("span");

      parent.classList.add("parent");
      child.classList.add("child");

      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);

      elem.innerHTML="";
      elem.appendChild(parent);
    });
}


function loaderAnimation(){
    var tl = gsap.timeline();

tl
    .from(" #loader .child span",{
        x:100,
        stagger:.2,
        duration:1,
        ease:Power3.easeInOut
    })
    .to(" #loader .parent .child",{
        y:"-100%",
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#loader",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"100%",
        top:0,
        duration:1,
        delay:-.8,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"0%",
        top:0,
        duration:1,
        delay:-.5,
        ease:Circ.easeInOut,
        onComplete: function(){
          animateHeaderContent();
      }
        
    });
}


function valueSetters(){
  gsap.set(".logo", {y:"-100%", opacity:0});
  gsap.set("#nav a", {y:"-100%", opacity:0});
  gsap.set("#nav li span", {y:"-100%", opacity:0});

  gsap.set(" #header .header-text p, .header-text h1", {
    opacity: 0,
    y: 20,
  });
}

function animateHeaderContent() {
  var tl = gsap.timeline();

  tl.to(".logo", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power4.out",
  })

  .to("#nav a", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power4.out",
  })
  .to("#nav li span",{
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power4.out",
  })
  .to(".header-text p, .header-text h1", {
    opacity: 1,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: "power4.out",
  });;
}

function cardShow() {
  document.querySelectorAll("#services #conatainer #services-list .ctn").forEach(function (ctn) {
    var showingImages;
    ctn.addEventListener("mousemove", function (dets) { 
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1; 
      showingImages = dets.target
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = "0.1s"; 
    })

    ctn.addEventListener("mouseleave",function (dets) {
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 0; 
    })
    ctn.addEventListener("touchstart", function (dets) {
      var touch = dets.touches[0];
      var targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
      if (targetElement && targetElement.classList.contains("ctn")) {
          showingImages = targetElement;
          document.querySelector("#cursor").children[targetElement.dataset.index].style.opacity = 1;
          document.querySelector("#cursor").children[targetElement.dataset.index].style.transform = "0.1s";
      }
    });

    ctn.addEventListener("touchmove", function (dets) {
        var touch = dets.touches[0];
        var targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetElement && targetElement.classList.contains("ctn")) {
            showingImages = targetElement;
            document.querySelector("#cursor").children[targetElement.dataset.index].style.opacity = 1;
            document.querySelector("#cursor").children[targetElement.dataset.index].style.transform = "0.1s";
        }
    });

    ctn.addEventListener("touchend", function () {
        if (showingImages) {
            document.querySelector("#cursor").children[showingImages.dataset.index].style.opacity = 0;
            showingImages = null;
        }
    });
  });
}
cardShow();


window.addEventListener("load", function () {
  revealToSpan();
  valueSetters();
  loaderAnimation();

});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});