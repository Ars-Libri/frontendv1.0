function openMenu(){
    var elementsHidden = document.getElementsByClassName('hidden');

  for(var i = 0;i<elementsHidden.length;i++){
    elementsHidden[i].style.width = '0';
    elementsHidden[i].style.height = '0';
  }
    document.getElementById('nav-general').style.width = '100vw';
    document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
    var elementsHidden = document.getElementsByClassName('hidden');

    for(var i = 0;i<elementsHidden.length;i++){
        elementsHidden[i].style.width = '100vw';
        elementsHidden[i].style.height = 'auto';
    }
    document.getElementById('nav-general').style.width = '0';
    document.getElementById('nav-general').style.height = '0';
}