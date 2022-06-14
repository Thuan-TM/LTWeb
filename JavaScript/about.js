const members = [
    {
        name: "Nguyễn Thị Bích Ngọc",
        age: 20,
        msv: 2051063476,
        img: `./Img/about/shizuka.png`,
        describe: "...",
        facebook: `https://www.facebook.com/profile.php?id=100071831855649`,
        github: `https://github.com/Bichngocc1701`,
        email: `mailto:`
    },
    {
        name: "Nguyễn Đức Tâm",
        age: 20,
        msv: 2051060693,
        img: `./Img/about/nobita.png`,
        describe: "...",
        facebook: `https://www.facebook.com/tamdoo2104`,
        github: `https://github.com/Dootam21`,
        email: `mailto:`
    }, 
    {
        name: "Lê Ngọc Thắng",
        age: 20,
        msv: 2051063442,
        img: `./Img/about/takesi.png`,
        describe: "...",
        facebook: `https://www.facebook.com/lengocthang.username`,
        github: `https://github.com/ngocthang2k2`,
        email: `mailto:`
    },
    {
        name: "Phạm Văn Thuấn",
        age: 20,
        msv: 2051063461,
        img: `./Img/about/deki.png`,
        describe: "...",
        facebook: `https://www.facebook.com/vanthuan0107`,
        github: `https://github.com/Thuan-TM`,
        email: `mailto:`
    },
]

const items = [...document.querySelectorAll('.members .items')]

function render(obj) {
    let html = `
            <div class="img_item col-md animation_over" stye="--animated-duration: .75s;">
            <img src="${obj.img}" style="transform: scale(1.1);" alt="${obj.name}">
            </div>
            <div class="infor col-md  pt-4 pt-md-0 " >
                <h2 class="text_popin fw-bold text-center pb-2" style="--fonz: 2.8rem;">Information</h2>
                <ul class="text_popin " style="--fonz: 1.8rem;">
                    <li class="animation_left"  ><span class="fw-bolder">Name: </span>${obj.name}</li>
                    <li class="animation_right" ><span class="fw-bolder">Age:</span> ${obj.age} <span class="ps-5 ms-5 fw-bolder">MSV: </span>${obj.msv}</li>
                    <li class="animation_left"  ><span class="fw-bolder">Class: </span> 62PM2 - Đại Học Thủy Lợi</li>
                    <li class="animation_right" ><span class="fw-bolder">Describe: </span>${obj.describe}</li>
                    <li class="text-center fs-1 animation_over" stye="--animated-duration: .75s;">
                        <a href="${obj.facebook}">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="${obj.github}">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${obj.email}">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>`
    document.querySelector('.infor_members').innerHTML = html
}

items.forEach( (element,index) => { 
    element.addEventListener('click', () => { 
        items.find(e => e.classList.contains('active')).classList.remove('active')
        element.classList.add('active')
        render(members[index])
    })
})
render(members[0])

