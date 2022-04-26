
const arch1 = document.querySelector('.arch1')
const arch2 = document.querySelector('.arch2')
const arch3 = document.querySelector('.arch3')
const arch4 = document.querySelector('.arch4')
const arch5 = document.querySelector('.arch5')
const arch6 = document.querySelector('.arch6')
const arch7 = document.querySelector('.arch7')
const arch8 = document.querySelector('.arch8')

const vanCtnr = document.querySelector('.van_layers_ctnr')
const vanLayer1 = document.querySelector('.van_layer1')
const vanLayer2 = document.querySelector('.van_layer2')

document.body.onscroll = function() {
    let windowPosition = window.pageYOffset;

    arch1.style.transform = "translateY(" + windowPosition / -4 + "px)";
    arch2.style.transform = "translateY(" + windowPosition / -7 + "px)";
    arch3.style.transform = "translateY(" + windowPosition / -5 + "px)";
    arch4.style.transform = "translateY(" + windowPosition / -7 + "px)";
    arch5.style.transform = "translateY(" + windowPosition / -5 + "px)";
    arch6.style.transform = "translateY(" + windowPosition / -10 + "px)";
    arch7.style.transform = "translateY(" + windowPosition / -4 + "px)";
    arch8.style.transform = "translateY(" + windowPosition / -6 + "px)";

    vanCtnr.style.transform = "translateX(" + windowPosition / -2 + "px)";
    vanLayer1.style.filter = "hue-rotate(" + windowPosition / -3 + "deg)";
    vanLayer2.style.filter = "hue-rotate(" + windowPosition / 3 + "deg)";
}






/* LOADING BG + DOCUMENT.READYSTATE */

/* const loadingBg = document.getElementById('loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
} */





/* HAMBURGUER MENU */

/* const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--lighta)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--c3)';
        }
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    }
} */
