

let menu = document.querySelector('.menu');
let item = document.querySelectorAll('.menu-item');
let clones = [];
let disableScroll = 0;
let scrollheight = 0;
let scrollpos = 0;
let clonesHeight = 0;

function getScrollPos(){
    console.log(menu.scrollTop)
    return menu.scrollTop;
}

function setScrollPos(pos){
    menu.scrollTop = pos;
}

function getClonesHeight(){
    clonesHeight = 0
    clones.forEach(clone =>{
        clonesHeight += clone.offsetHeight
    })
    return clonesHeight;
}

function reCalc(){
    scrollpos = getScrollPos();
    scrollheight = menu.scrollHeight;
    clonesHeight = getClonesHeight();
    if(scrollpos <= 0){
        setScrollPos(1)
    }
}

function scrollUpdate(){
    if(!disableScroll){
        scrollpos = getScrollPos();
        if(clonesHeight + scrollpos >= scrollheight){
            setScrollPos(1)
            disableScroll = true
        }else if(scrollpos <=0){
            setScrollPos(scrollheight - clonesHeight);
            disableScroll = true;
        }
    }
    if(disableScroll){
        window.setTimeout(()=>{
            disableScroll = false
        },40);
    }
}

function onLoad(){
    item.forEach(item =>{
        const clone = item.cloneNode(true);
        menu.appendChild(clone);
        clone.classList.add('js-clone');
    });

    clones = menu.querySelectorAll('.js-clone')

    reCalc();
    menu.addEventListener('scroll', ()=>{
        window.requestAnimationFrame(scrollUpdate);
    },false);
    window.addEventListener('resize', ()=>{
        window.requestAnimationFrame(reCalc)
    },false)
}

window.onload = onLoad()

