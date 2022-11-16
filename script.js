'use strict';   //문법을 엄격하게 확인 에러를 볼 수 있는 모드


// 스크롤에 따른 메뉴바 색상 처리
const navbar = document.querySelector('#navbar'); //navbar 객체를 가져옴
const navbarHeight = navbar.getBoundingClientRect().height;     //getBoundingClientRect ??
console.log(navbarHeight);
document.addEventListener('scroll', () =>{//현재 문서에 이벤트를 추가
     console.log('이벤트가 발생되었음!');
     console.log(window.scrollY);
     if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--bold');

     }else{
         navbar.classList.remove('navbar--bold');
     }
});           

// 스크롤에 따른 메뉴바 고정
const navbarmenu = document.querySelector('.navbar__menu');

// 소개부분에 맞춰서 
navbarmenu.addEventListener('click',(e) =>{
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link==null) {
        return;

    }
    // console.log(link);
    scrollIntoView(link);
})
// contact 버튼
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener('click',()=> {
    scrollIntoView('#contact');
})

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
    home.style.opacity= 1-window.scrollY / homeHeight;
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});





function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}
