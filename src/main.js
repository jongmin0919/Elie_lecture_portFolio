// document 객체는 문서 전체에 대한 정보를 가지고 있는 객체를 의미.
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height
// getBoundingClientRect()는 CSS 속성들을 반환합니다.
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark'); 
  }
  // 상황에 따라 클래스를 추가(add) 하고 제거(remove) 하는 콜백 함수
})
// addEventListener 메서드는 첫번째 매개변수가 발생시 두번째 매개변수(콜백 함수)를 실행합니다.


