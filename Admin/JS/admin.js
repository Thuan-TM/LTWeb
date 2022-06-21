var navToggler = document.getElementById('navToggler');
console.log(navToggler);
var menuAside = document.querySelector('.menu-aside');
var mainModel = document.querySelector('.main-model');
navToggler.addEventListener("click", (e)=> {
  menuAside.classList.toggle("open");
  console.log(1);
})

navToggler.addEventListener("click", (e)=> {
  mainModel.classList.toggle("show-model");
  
})

navToggler.addEventListener("click", (e)=> {
  navToggler.classList.toggle("show-icon");
  console.log(2);
})

const Islogin = localStorage.Islogin || 'false'

if(Islogin == 'false') {
  window.location = './../Form_Login/Login.html'
}

//  dang suat
const logOut = document.querySelectorAll('.Logout')
logOut.forEach(e=> {
  e.onclick = ()=> {
    localStorage.setItem('Islogin','false')
    window.location = './../Form_Login/Login.html'
  
  }
  
})
