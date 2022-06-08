//var index = 1;
const imgList1 = ['./IMG/food/outSpecials/mon-1.jpg', './IMG/food/outSpecials/mon-2.jpg', './IMG/food/outSpecials/mon-3.jpg', './IMG/food/outSpecials/mon-4.jpg'];
const imgList2 = ['./IMG/food/outSpecials/outSpecials-2/monAn-1.jpg', './IMG/food/outSpecials/outSpecials-2/monAn-2.jpg', './IMG/food/outSpecials/outSpecials-2/monAn-3.jpg', './IMG/food/outSpecials/outSpecials-2/monAn-4.jpg'];


var lefts = document.querySelectorAll('.directional-left');
var rights = document.querySelectorAll('.directional-right');
var imgs = document.querySelectorAll('.outSpeacials_item-img img');
var outSpeacials_item = document.querySelector('.outSpeacials_item');

lefts.forEach((element,i) => {
    let index = 1;
    element.onclick = () => {
        if(element===lefts[0]) {
            if(index==imgList1.length) {
                index=0;
            }
            imgs[i].src = imgList1[index];
            
        }
        else {
            if(index==imgList2.length) {
                index=0;
            }
            imgs[i].src = imgList2[index];
        }
        index++;
    }
});

rights.forEach((element,i) => {
    let index = 1;
    element.onclick = () => {
        if(element===rights[0]) {
            if(index==-1) {
                index=imgList1.length-1;
            }
            imgs[i].src = imgList1[index];
        }
        else {
            if(index==-1) {
                index=imgList1.length-1
            }
            imgs[i].src = imgList2[index];
        }
        index--;
    }
});

