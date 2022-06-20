var nav = document.getElementById('nav');
var listChucNang = document.querySelector('.list_chucNang');

nav.onclick = () => {
  listChucNang.classList.toggle('open');
}


const Islogin = localStorage.Islogin || false
console.log(Islogin)
if(Islogin === 'false') {
  window.location = './../Form_Login/Login.html'
}

//  dang suat

const logOut = document.querySelector('.Logout')
logOut.onclick = ()=> {
  localStorage.setItem('Islogin',false)
}
