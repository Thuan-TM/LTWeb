window.onload = ()=>{
    const animateds = document.querySelectorAll(".animated[type_animate]")
    let observer = new IntersectionObserver (entries => {
        entries.forEach(e => {
            e.target.classList.toggle('active', e.isIntersecting)
        })
    },)

    animateds.forEach(animate =>{
        observer.observe(animate)
    })
}

