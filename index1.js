//Atena writes code here 

// images show up-------------------------------------------
function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 100; // timing of showing up elements
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // start action when scroll


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


// Shopping cart system ----------------------------------------



