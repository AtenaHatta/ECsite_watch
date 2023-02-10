
// link scroll ----------------------------------------
var pagelink = document.querySelectorAll('.js-pagelink');
 
var smoothScrollType;
if('scrollBehavior' in document.documentElement.style) {
    smoothScrollType = smoothScroll;
} else {
    smoothScrollType = oldTypeSmoothScroll;
}
 
for( var i = 0; i < pagelink.length; i++ ) {
    pagelink[i].addEventListener('click', smoothScrollType, false);
}
 
function smoothScroll(e) {
    e.preventDefault();
    var pagelinkId = e.target.hash;
    var pagelinkSection = document.querySelector(pagelinkId);
    var scrollPosition = window.pageYOffset + pagelinkSection.getBoundingClientRect().top;
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
}


// Shopping cart menu ----------------------------------------
document.querySelector('.menu-btn').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('is-active');
});


// Night mode ----------------------------------------
// const btn = document.querySelector("#btn-dark-mode");

// // checkbox on off
// btn.addEventListener("change", () => {
// 	if (btn.checked === true) {
// 		document.body.classList.remove('light-mode');
// 		document.body.classList.add('dark-mode');
// 		localStorage.setItem('dark-mode-settings', 'dark');
// 	}else {
// 		document.body.classList.remove('dark-mode');
// 		document.body.classList.add('light-mode');
// 		localStorage.setItem('dark-mode-settings', 'light');
// 	}
// });
	
// // local strage
// if(localStorage.getItem('dark-mode-settings')==='dark') {
// 	document.body.classList.add('dark-mode');
// 	btn.checked = true;
// }else if (localStorage.getItem('dark-mode-settings')==='light') {
// 	document.body.classList.add('light-mode');
// }

// arrowUp.setAttribute("class", "fas fa-chevron-up higher-amount");

// var cartPara = document.createElement("p");
// cartPara.setAttribute("class", "item-amount");
// cartPara.textContent = "1";

// var arrowDown = document.createElement("i");
// arrowDown.setAttribute("class", "fas fa-chevron-down lower-amount");

// arrowUp.addEventListener('click', () => {
  // const counter = document.getElementById('cartPara');
  // counter.innerHTML = ++state.count;
  // });
  

// "features" page animation ----------------------------------------
  var slideConts = document.querySelectorAll('.slideConts');
  var slideContsRect = []; 
  var slideContsTop = []; 
  var windowY = window.pageYOffset; //scroll position
  var windowH = window.innerHeight; // window height
  var remainder = 100; 

  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }

  window.addEventListener('resize', function () {
    windowH = window.innerHeight;
  });

  window.addEventListener('scroll', function () {
    windowY = window.pageYOffset;
    
    for (var i = 0; i < slideConts.length; i++) {
      if(windowY > slideContsTop[i] - windowH + remainder) {
        slideConts[i].classList.add('show');
      } else {
        slideConts[i].classList.remove('show');
      }
    }
  });