var nav = document.getElementById('nav');
var listChucNang = document.querySelector('.list_chucNang');

nav.onclick = () => {
  listChucNang.classList.toggle('open');
}
console.log(localStorage.Islogin)
if(localStorage.Islogin === 'false') {
  window.location = './../Form_Login/Login.html'
}

//  dang suat

const logOut = document.querySelector('.Logout')
logOut.onclick = ()=> {
  localStorage.setItem('Islogin',false)
  // window.location = './../Form_Login/Login.html'

  // window.location = './../Form_Login/Login.html'
}