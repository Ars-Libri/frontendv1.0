function openMenu(){
  document.body.style.backgroundImage = "url('assets/home/menu/elipses-background.svg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

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
  document.getElementById('nav-general').style.width = '100vw';
  document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
  document.body.style.backgroundImage = "";
  document.body.style.backgroundSize = "";
  document.body.style.backgroundRepeat = "";

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

window.onload = checkedRadio(currentSlide);

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function checkedRadio(currentSlide){
    for(var i=0;i<5;i++){
      if(i != currentSlide){
        document.getElementById('radio'+i).checked = false;
      } else if(i===currentSlide){
        document.getElementById('radio'+i).checked = true;
      }
    }
  }

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
    checkedRadio(currentSlide)
  } else {
    currentSlide++
    checkedRadio(currentSlide)
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
    checkedRadio(currentSlide)
  } else {
    currentSlide--
    checkedRadio(currentSlide)
  }
  showSlider()
}

function radioBtn(value){
  if(currentSlide > value){
    currentSlide = value+1;
    prevSlider();
  } else if(currentSlide == value){
    
  } else{
    currentSlide = value-1;
    nextSlider();
  }
  for(var i=0;i<5;i++){
    if(i != value){
      document.getElementById('radio'+i).checked = false;
    } else{
      document.getElementById('radio'+i).checked = true;
    }
  }
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 14000);