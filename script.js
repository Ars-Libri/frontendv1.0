function openMenu(){
    document.getElementById('header-page').style.height = '0';
    document.getElementById('header-page').style.width = '0';
    document.getElementById('header-page').style.marginTop = '100vh';
    document.getElementById('main-page').style.height = '0';
    document.getElementById('main-page').style.width = '0';
    document.getElementById('section-page').style.height = '0';
    document.getElementById('section-page').style.width = '0';
    document.getElementById('nav-general').style.width = '100vw';
    document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
    document.getElementById('header-page').style.height = 'auto';
    document.getElementById('header-page').style.width = 'auto';
    document.getElementById('header-page').style.marginTop = '0vh';
    document.getElementById('main-page').style.height = 'auto';
    document.getElementById('main-page').style.width = 'auto';
    document.getElementById('section-page').style.height = 'auto';
    document.getElementById('section-page').style.width = 'auto';
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