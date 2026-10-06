// AOS
    AOS.init();

// 워드 & 프레임 슬라이더
const wordSlider = new Swiper('.app-intro .swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    allowTouchMove: false,
    autoplay: {
        delay: 2000
    },
    speed: 1000,
});
// 챌린지 슬라이더
const challengeSlider = new Swiper('.swiper.challenge-list', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000
    }
});


// 챌린지 섹션 모달 구현
let modalContainer = document.querySelector('.modal-container')
let dim = document.querySelector('.dim')
let slides = document.querySelectorAll('.challenge-list .swiper-slide')
let contents = document.querySelectorAll('.modal article > div')

let obj = {
    overlay: '.dim',
    modal: 'modal'
}

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        modalContainer.classList.add('open')
        challengeSlider.autoplay.stop() 

        let el = document.querySelector('.' + slide.dataset.topic)
        console.log(slide.dataset.topic)
        console.log(el)
        
        contents.forEach((div) => {
            div.classList.remove('open')
        })
        el.classList.add('open')
    })
})

dim.addEventListener('click', () => {
    modalContainer.classList.remove('open')
    challengeSlider.autoplay.start() 
})

// 헤더 변경
let header = document.querySelector('header')
let bar = document.querySelector('.bar')
let scrollProgress  = document.querySelector('.scroll-progress')

window.addEventListener('scroll',() => {
    console.log(window.scrollY)
    if( window.scrollY > document.querySelector('.main-visual').offsetHeight -100 ) {
        header.classList.add('drop')
        scrollProgress.classList.add('drop')
    }else{
        header.classList.remove('drop')
        scrollProgress.classList.remove('drop')
    }
    let per =  (window.scrollY / ( document.body.offsetHeight - window.innerHeight )) *100
    console.log(per)

    bar.style.width = per + '%'
})

// faq 아코디언
let faq_ul = document.querySelectorAll('.faq-sec ul')

faq_ul.forEach((ul) => {
    ul.addEventListener('click',() => {
        ul.classList.toggle('drop-open')
    })

})

// 서비스 드롭다운
let serviceList = document.querySelector('.service-list ul')
let selected = document.querySelector('.selected')
let serviceCta = document.querySelector('a.go-service')

serviceList.addEventListener('click',(ev) => {
    let target = ev.target
    console.log(target)

    selected.innerText = target.innerText
    serviceList.classList.toggle('drop')
})

serviceCta.addEventListener('click',() => {
    serviceCta.href = 'http://boost-up.online/' + target.dataset.linkname
})

var swiper = new Swiper('.Swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    mousewheel: true,
});

// 전체메뉴 
let fullMenu = document.querySelector('.full-menu')
let openBtn = document.querySelector('button.all-menu')
let closeBtn = document.querySelector('.full-menu button.close')

openBtn.addEventListener('click', () => {
    fullMenu.classList.add('open')
    wordSlider.forEach((Slider) => {
        Slider.autoplay.stop()
    })
})
closeBtn.addEventListener('click', () => {
    fullMenu.classList.remove('open')
    wordSlider.forEach((Slider) => {
        Slider.autoplay.start()
    })
})