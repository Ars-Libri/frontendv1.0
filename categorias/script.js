function openMenu(){
    document.body.style.backgroundImage = "url('../assets/home/menu/elipses-background.svg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  
  
    //
  
  
    //
  
    var elementsHidden = document.getElementsByClassName('hidden');
  
    for(var i = 0;i<elementsHidden.length;i++){
      elementsHidden[i].style.display = 'none';
    }
  
    //
    document.getElementById('nav-general').style.width = '100vw';
    document.getElementById('nav-general').style.height = 'auto';
  }
  function closeMenu(){
    document.body.style.backgroundImage = "";
    document.body.style.backgroundSize = "";
    document.body.style.backgroundRepeat = "";
  
    //
  
    var elementsHidden = document.getElementsByClassName('hidden');
  
    for(var i = 0;i<elementsHidden.length;i++){
      elementsHidden[i].style.display = 'flex';
    }
  
    //

    document.getElementById('nav-general').style.width = '0';
    document.getElementById('nav-general').style.height = '0';
  }