function openMenu(){
    document.getElementById('header-top').style.height = '0';
    document.getElementById('header-top').style.width = '0';
    document.getElementById('header-main').style.height = '0';
    document.getElementById('header-main').style.width = '0';
    document.getElementById('texts').style.width = '0';
    document.getElementById('texts').style.height = '0';
    document.getElementById('elipse').style.width = '0';
    document.getElementById('elipse').style.height = '0';
    document.getElementById('header-bottom').style.height = '0';
    document.getElementById('header-bottom').style.width = '0';
    document.getElementById('header-top').style.marginLeft = '100vw';
    document.getElementById('header-main').style.marginLeft = '100vw';
    document.getElementById('header-bottom').style.marginLeft = '100vw';
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('img').style.display = 'none';
    document.getElementById('footer-page').style.display = 'none';
    document.getElementById('nav-general').style.width = '100vw';
    document.getElementById('nav-general').style.height = 'auto';
}
function closeMenu(){
    document.getElementById('header-top').style.height = '12vh';
    document.getElementById('header-top').style.width = 'auto';
    document.getElementById('header-main').style.height = '76vh';
    document.getElementById('header-main').style.width = 'auto';
    document.getElementById('texts').style.width = 'auto';
    document.getElementById('texts').style.height = 'auto';
    document.getElementById('elipse').style.width = '12rem';
    document.getElementById('elipse').style.height = '12rem';
    document.getElementById('header-bottom').style.height = '12vh';
    document.getElementById('header-bottom').style.width = 'auto';
    document.getElementById('header-top').style.marginLeft = '0vw';
    document.getElementById('header-main').style.marginLeft = '0vw';
    document.getElementById('header-bottom').style.marginLeft = '0vw';
    document.getElementById('main-page').style.display = 'flex';
    document.getElementById('img').style.display = 'block';
    document.getElementById('footer-page').style.display = 'flex';
    document.getElementById('nav-general').style.width = '0';
    document.getElementById('nav-general').style.height = '0';
}