var nav = document.getElementById('nav');
var listChucNang = document.querySelector('.list_chucNang');

nav.onclick = () => {
  listChucNang.classList.toggle('open');
}

if(localStorage.Islogin === 'false') {
  window.location = './../Form_Login/Login.html'
}

//  dang suat
const logOut = document.querySelector('.Logout')
logOut.onclick = ()=> {
  localStorage.setItem('Islogin',false)
}
