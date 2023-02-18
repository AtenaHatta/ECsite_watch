// header link scroll ----------------------------------------
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



  




  