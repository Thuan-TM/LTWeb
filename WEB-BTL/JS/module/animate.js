
export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

const animate = (()=>{
    
    let prefix = 'animate__'
    let point_animate = window.innerHeight;

    const list_left = $$('[type_animate = "left"]')
    const list_right = $$('[type_animate = "right"]')
    const list_down = $$('[type_animate = "down"]')
    const list_up = $$('[type_animate = "up"]')
    const list_zoomIn = $$('[type_animate = "zoomIn"]')
    
    function Action(list_animate, in_animate , out_animate){
        list_animate.forEach(element => {
            const BlockE = element.getBoundingClientRect().top;
            if(BlockE < point_animate){
                element.classList.add(`${prefix}${in_animate}`)
                element.classList.remove(`${out_animate}`)
            }
            else {
                element.classList.remove(`${prefix}${in_animate}`)
                element.classList.add(`${out_animate}`)
            }
        });
    }

    return {
        fadeInLeft(Action){
            Action(list_left,'fadeInLeft', 'hidden')
        },
        fadeInRight(Action){
            Action(list_right,'fadeInRight', 'hidden')
        },
        fadeInDown(Action){
            Action(list_down,'fadeInDown', 'hidden')
        },
        fadeInUp(Action){
            Action(list_up,'fadeInUp', 'hidden')
        },
        zoomIn(){
            Action(list_zoomIn,'zoomIn', 'hidden')
        },
        init (){
            this.fadeInDown(Action);
            this.fadeInLeft(Action);
            this.fadeInRight(Action);
            this.fadeInUp(Action);
            this.zoomIn(Action);
            window.addEventListener('scroll',()=>this.fadeInLeft(Action))
            window.addEventListener('scroll',()=>this.fadeInRight(Action))
            window.addEventListener('scroll',()=>this.fadeInDown(Action))
            window.addEventListener('scroll',()=>this.fadeInUp(Action))
            window.addEventListener('scroll',()=>this.zoomIn(Action))
        }
    }
})();

export default animate;