window.onload = ()=>{
    const animateds = document.querySelectorAll(".animated[type_animate]")
    let observer = new IntersectionObserver (entries => {
        entries.forEach(e => {
            e.target.classList.toggle('active',e.isIntersecting)
            // e.target.classList.add('active')
            // if(e.boundingClientRect.top > e.rootBounds.height){
            //     e.target.classList.remove('active')
            // }
        })
    })

    animateds.forEach(animate =>{
        observer.observe(animate)
    })
}
