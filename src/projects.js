'use strict';

// 프로젝트 필터링 관련 로직
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project')
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  
  const filter = event.target.dataset.category;

  if (filter == null) return

  handleActiveSelection(event.target);
  filterProjects(filter);
  
});


// 타켓에 대한 액티브 메뉴 재설정 함수
function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

// 클릭 이벤트 발생시 나타날 프로젝트 필터링 함수
function filterProjects(filter) {
  
  projectsContainer.classList.add('animation--out');
  projects.forEach(project => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  })
  setTimeout(() => {
    projectsContainer.classList.remove('animation--out');
  }, 350)
}