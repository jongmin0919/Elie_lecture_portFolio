'use strict';

// document 객체는 문서 전체에 대한 정보를 가지고 있는 객체를 의미.
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) header.classList.add('header--dark');
  else header.classList.remove('header--dark');
});

// header의 height 정보 선택
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 애로우 이동값 
const arrow = document.querySelector('.arrow__up');
const arrowHeight = arrow.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) arrow.style.opacity = 1;
  else arrow.style.opacity = 0;
});   
// 상황에 따라 클래스를 추가(add) 하고 제거(remove) 하는 콜백 함수

// addEventListener 메서드는 첫번째 매개변수가 발생시 두번째 매개변수(콜백 함수)를 실행합니다.

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})
// navbarToggle에 클릭 이벤트가 발생시 navbarMenu의 클래스 리스트에 해당 리스트가 있을 경우 삭제하고, 없으면 추가합니다. 그리고 CSS에서 해당 클래스를 이용해 나타내고자 하는 navbarMenu의 display를 지정해주면 됩니다.

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open')
})
// 메뉴를 클릭 시 oepn 클래스를 삭제하여 토글을 제거함