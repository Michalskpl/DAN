
let BtnMenuMobile = document.querySelector('.w-nav-pointer')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')

BtnMenuMobile.addEventListener('click', ()=>{
    console.log('klik')
    BtnMenuMobile.classList.toggle('active')
    nav.classList.toggle('active')

})

window.addEventListener('load', ()=>{
    body.style.opacity = 1
})


// - - - - - - footer copyright - ---  -- 
const ny = new Date().getFullYear()
function footercopy(){
    const fcopy = document.querySelector('#footer')
    fcopy.innerHTML = `
    Copyright &copy Dobry Adres Nieruchomości 2020 - ${ny} Wszelkie prawa zastrzeżone. unless otherwise noted.
    `
}

// - - - - - - - - - -- - - - - -  dane - -- - - - - -- 

import {oferty} from './dane.js'
const kk = oferty

let naSprzedaz = document.querySelector('.naSprzedaz')
let naWynajem = document.querySelector('.naWynajem')
let ofertakk = document.querySelector('.web-o-s-o')
let ViewPictContener = document.querySelector('.ViewPictContener')



function nieruch(){
    for(let i=0; i<kk.length; i++){
        // console.log(kk[i])
        let sprzedaz = kk[i].sprzedaz;

        if(sprzedaz === 'sprzedaż' ){
            let yyy = kk[i].id;
            console.log(yyy)

        const el = document.createElement('li');
        // el.classList.add('inka');
        el.innerHTML=`
            <span class="o-box">
                <span class="pictin">
                    <a href="./subpage/offer.html"><img src="./subpage/pict/${kk[i].pictOne}" id='${kk[i].id}' alt=""></a>
                </span>
                <span class="o-o-g"></span>
                <span class="opis-ofers">
                    <p>${kk[i].naglowek}</p>
                    <span class="cena-o">
                        <p>cena:</p>&nbsp<p class="price-o-o">${kk[i].cena}</p>&nbsp;<p>pln</p>
                    </span>
                </span>
            </span>
        `;
        naSprzedaz.append(el)

        }

        if(sprzedaz === 'wynajem' ){
            const el = document.createElement('li');
            
            el.classList.add('inka');
            el.innerHTML=`
                <span class="o-box">
                    <span class="pictin">
                        <a href="./subpage/offer.html"><img src="./subpage/pict/${kk[i].pictOne}" id='${kk[i].id}' alt=""></a>
                    </span>
                    <span class="o-o-g"></span>
                    <span class="opis-ofers">
                        <p>${kk[i].naglowek}</p>
                        <span class="cena-o">
                            <p>cena:</p>&nbsp<p class="price-o-o">${kk[i].cena}</p>&nbsp;<p>pln</p>
                        </span>
                        </span>
                    </span>
            `;
            naWynajem.append(el)
        }
}
}




function cookies(){
    // document.cookie = `tetete = ${werr}`
    const name = 'NieruchomoscNO';
    let werr = event.target.id;
    const date = new Date();
    date.setTime(date.getTime() + (10))
    let expires = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${werr}`
}

function findd(){

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let result
    cArray.forEach(Element =>{
        if(Element.indexOf(name) == 0){
            result = Element.substring(name.length + 1)
        }
    })
    return result
}

    // let idn = document.cookie
    let idn = getCookie("NieruchomoscNO")
        // console.warn(idn)

    for(let i=0; i<kk.length; i++){
        let jono = idn

        if(kk[i].id == `${jono}`){

    const el = document.createElement('div')


    el.innerHTML=`
    <div class="web-ofers-o">
        <span class="w-o-s-t">
            <p>oferta nr:</p>
            <p>${kk[i].nr}</p>
        </span>
    </div>
    <div class="desc-ofer">
        <div class="desc-title">
            <p>${kk[i].sprzedaz}</p>
            <p>Lokalizacja:</p>
            <p>${kk[i].Lokalizacja}</p>
        </div>
    <div class="kind-ofer">
        <p>Rodzaj:</p>
        <p>${kk[i].rodzaj}</p>
        <p>cena:</p>
        <p>${kk[i].cena}</p>
        <p>pln</p>
    </div>
    <div class="description">
        <p>krótki opis</p>
        <p>${kk[i].opis}</p>
    </div>

    </div>
    <div class="web-realEstate-no">
        <div class="wreIng" >
            <img id='pictOne' src="../subpage/pict/${kk[i].pictOne}" alt="">
        </div>
        <div class="wreIng" >
            <img id='pictTwo' src="../subpage/pict/${kk[i].pictTwo}" alt="">
        </div>
        <div class="wreIng">
            <img id='pictThree' src="../subpage/pict/${kk[i].pictThree}" alt="">
        </div>
        <div class="wreIng" >
            <img id='pictFour' src="../subpage/pict/${kk[i].pictFour}" alt="">
        </div>
    </div>`

    ofertakk.append(el)

    }}
}


function ClickOnPict(e){

    function getCookie(name){
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split('; ');
        let result
        cArray.forEach(Element =>{
            if(Element.indexOf(name) == 0){
                result = Element.substring(name.length + 1)
            }
        })
        return result
    }

    let idnti = getCookie("NieruchomoscNO")
    const m1 = document.createElement('div')

    for(let i=0; i<kk.length; i++){
        let jonoeee = idnti
        let noPict = e.target.id
        if(kk[i].id == `${jonoeee}`){
            if(document.querySelector('.viewPict') != null){
                var element = document.querySelector('.viewPict');
                element.parentNode.removeChild(element);
            }else if( noPict === 'pictOne'){
                m1.innerHTML = `
                    <div class="viewPict">
                        <img src="../subpage/pict/${kk[i].pictOne}" alt="">
                    </div>
                `
                ViewPictContener.appendChild(m1)
            }
            if( noPict === 'pictTwo'){
                m1.innerHTML = `
                    <div class="viewPict">
                        <img src="../subpage/pict/${kk[i].pictTwo}" alt="">
                    </div>
                `
                ViewPictContener.appendChild(m1)
            }
            if( noPict === 'pictThree'){
                m1.innerHTML = `
                    <div class="viewPict">
                    <img src="../subpage/pict/${kk[i].pictThree}" alt="">
                    </div>
                    `
                    ViewPictContener.appendChild(m1)
                }
                if( noPict === 'pictFour'){
                    m1.innerHTML = `
                    <div class="viewPict">
                    <img src="../subpage/pict/${kk[i].pictFour}" alt="">
                    </div>
                    `
                    ViewPictContener.appendChild(m1)
                }
            }
        }
    }
    
    
function check(){
    if(document.title === `oferta` ){
        findd()
        let matchXX = window.innerWidth;
        if(matchXX >= 768){
            addEventListener('click', ClickOnPict)
        }

        }
        
    }

    if(document.title === `nieruchomości`){
        addEventListener('click', cookies)
        nieruch()
    }

check()
footercopy()
