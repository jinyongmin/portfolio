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
const navbarMenu = document.querySelector('.navbar__menu');

// 소개부분에 맞춰서 
navbarMenu.addEventListener('click',(e) =>{
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link==null) {
        return;

    }
    // console.log(link);
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    
})
//모바일 메뉴버튼 설정
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',() =>{
    navbarMenu.classList.toggle('open');
});
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

//선택한 프로젝트 보이기

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.paentNode.dataset.filter;
    if(filter == null){
        return;
    }

    const active = document.querySelector('.category__btn.selected');
    if(active != null){
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');

    projectContainer.classList.add('anin-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
        
        });
        projectContainer.classList.remove('invisible');
    },300)


});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

