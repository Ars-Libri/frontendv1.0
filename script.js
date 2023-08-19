function openMenu(){
  var textsAbsolute = document.getElementsByClassName('texts-absolute');

  for(var i = 0;i<textsAbsolute.length;i++){
    textsAbsolute[i].style.display = 'none';
  }

  //

  var arrowsSlider = document.getElementsByClassName('arrow-slide');

  for(var i = 0;i<arrowsSlider.length;i++){
    arrowsSlider[i].style.width = '0';
  }

  //

  var elementsHidden = document.getElementsByClassName('hidden');

  for(var i = 0;i<elementsHidden.length;i++){
    elementsHidden[i].style.width = '0';
    elementsHidden[i].style.height = '0';
  }

  //

  document.getElementById('quadrado-de-fundo').style.width = '0';
  document.getElementById('quadrado-de-fundo').style.height = '0';
  document.getElementById('nav-general').style.width = '100vw';
  document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
  var textsAbsolute = document.getElementsByClassName('texts-absolute');

  for(var i = 0;i<textsAbsolute.length;i++){
    textsAbsolute[i].style.display = 'block';
  }

  //

  var arrowsSlider = document.getElementsByClassName('arrow-slide');

  for(var i = 0;i<arrowsSlider.length;i++){
    arrowsSlider[i].style.width = '13vw';
  }

  //

  var elementsHidden = document.getElementsByClassName('hidden');

  for(var i = 0;i<elementsHidden.length;i++){
    elementsHidden[i].style.width = '100vw';
    elementsHidden[i].style.height = 'auto';
  }

  //

  document.getElementById('quadrado-de-fundo').style.width = '150px';
  document.getElementById('quadrado-de-fundo').style.height = '150px';
  document.getElementById('nav-general').style.width = '0';
  document.getElementById('nav-general').style.height = '0';
}
function colorBtnNav(id){
  for(var i = 1;i<5;i++){
    if(id==i){
      var element = document.getElementById("categoria-"+i);
      element.classList.add('btn-select-category');
    } else{
      var element = document.getElementById("categoria-"+i);
      element.classList.remove('btn-select-category');
    }
  }
}
/* Script slider */

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

setInterval(nextSlider, 7000);