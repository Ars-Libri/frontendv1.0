function openMenu(){
    document.getElementById('header-page').style.height = '0';
    document.getElementById('header-page').style.width = '0';
    document.getElementById('header-page').style.marginLeft = '100vw';
    document.getElementById('main-page').style.marginLeft = '100vw';
    document.getElementById('section-category').style.marginLeft = '100vw';
    document.getElementById('footer-page').style.marginLeft = '100vw';
    document.getElementById('main-page').style.height = '0';
    document.getElementById('main-page').style.width = '0';
    document.getElementById('section-category').style.height = '0';
    document.getElementById('section-category').style.width = '0';
    document.getElementById('quadrado-de-fundo').style.width = '0';
    document.getElementById('quadrado-de-fundo').style.height = '0';
    document.getElementById('footer-page').style.width = '0';
    document.getElementById('footer-page').style.height = '0';
    document.getElementById('nav-general').style.width = '100vw';
    document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
    document.getElementById('header-page').style.height = 'auto';
    document.getElementById('header-page').style.width = 'auto';
    document.getElementById('header-page').style.marginLeft = '0vw';
    document.getElementById('quadrado-de-fundo').style.width = '150px';
    document.getElementById('quadrado-de-fundo').style.height = '150px';
    document.getElementById('main-page').style.marginLeft = '0vw';
    document.getElementById('section-category').style.marginLeft = '0vw';
    document.getElementById('footer-page').style.marginLeft = '0vw';
    document.getElementById('main-page').style.height = 'auto';
    document.getElementById('main-page').style.width = 'auto';
    document.getElementById('section-category').style.height = 'auto';
    document.getElementById('section-category').style.width = 'auto';
    document.getElementById('footer-page').style.width = 'auto';
    document.getElementById('footer-page').style.height = 'auto';
    document.getElementById('nav-general').style.width = '0';
    document.getElementById('nav-general').style.height = '0';
}
function colorBtnNav(id){
    for(var i = 1;i<5;i++){
        if(id==i){
            document.getElementById("categoria-"+i).style.color = "var(--secondary-color-gold)";
        } else{
            document.getElementById("categoria-"+i).style.color = "var(--text-color)";
        }
    }
}
/* Script slider */

/* Responsive CSS slider */

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)