var navEl = document.querySelector('.nav-function');
var rightEl = document.querySelector('.container-right');
var mainEl =document.querySelector('.main-contain');


window.addEventListener('scroll', function(){
  if (window.pageYOffset > 180) {
    navEl.classList.add('nav-fixed');
    mainEl.classList.add('main-margin');
    rightEl.classList.add('right-fixed');
  } else {
    navEl.classList.remove('nav-fixed');
    mainEl.classList.remove('main-margin');
    rightEl.classList.remove('right-fixed');
  };
});
