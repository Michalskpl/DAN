// const welcome = document.querySelector('#welcome')
const welcoT = document.querySelectorAll('.welcoT')
// const welco = document.querySelectorAll('.welco')
const body = document.querySelector('body')
const url = ('public/site/main.html');

    window.addEventListener('load', ()=>{
        body.style.opacity = 1
        let t = 1000
        setTimeout(()=>{
            for(let i = 0; i<welcoT.length; i++){
                setTimeout(()=>{
                    body.style.opacity = 1
                    welcoT[i].style.animation = `welcomeA 2s`;

                    // welcoT[i].style.opacity = 1;
                    console.log(t)
                },`${t}`)
                t += 300;
            }
        },200)

        setTimeout(()=>{
            console.log('dziala')
            window.location.replace(url);
        }, 3000)

    })
