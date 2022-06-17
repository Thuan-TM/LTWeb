const comHome = document.querySelector('.comehome')
window.onscroll = ()=> {
    if(window.scrollY > 0){
        comHome.classList.remove("hide")
    }
    else {comHome.classList.add("hide")}
}