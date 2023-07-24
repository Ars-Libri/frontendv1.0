function changeOption(){
    if(document.getElementById('form-login').style.display == 'flex'){
        document.getElementById('btn-change').innerHTML = 'Login >'
        document.getElementById('form-login').style.display = 'none'
        document.getElementById('form-cad').style.display = 'flex'
        
    } else{
        document.getElementById('btn-change').innerHTML = 'Cadastre-se >'
        document.getElementById('form-login').style.display = 'flex'
        document.getElementById('form-cad').style.display = 'none'
    }
}