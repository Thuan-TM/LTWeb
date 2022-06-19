var nav = document.getElementById('nav');
var listChucNang = document.querySelector('.list_chucNang');

nav.onclick = () => {
  listChucNang.classList.toggle('open');
}