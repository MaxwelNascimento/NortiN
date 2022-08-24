let usuario      = document.getElementById('username');
let senha        = document.getElementById('password');
let btnRegistrar = document.getElementById('registerValidar');
let iconEye      = document.getElementById('iconEye');
let iconEyeSlash = document.getElementById('iconEyeSlash');

function hideSenha(){
    if(iconEye.style.display != 'none'){
        iconEye.style.display      = 'none';
        iconEyeSlash.style.display = 'inline';
        senha.setAttribute('type', 'text');
    }else {
        iconEye.style.display      = 'inline';
        iconEyeSlash.style.display = 'none';
        senha.setAttribute('type', 'password');
    }
    // document.getElementById('iconEye').style.cssText = "color: red;";
}