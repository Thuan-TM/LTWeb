const comHome = document.querySelector('.comehome')
window.onscroll = ()=> {
    console.log(window.scrollY)
    if(window.scrollY > 0){
        comHome.classList.remove("hide")
    }
    else {comHome.classList.add("hide")}
}