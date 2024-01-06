// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해 모든 섹션들을 관찰
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화
// 보여지는 화면이 다수인 경우 가장 상위에 있는 섹션을 활성화 (footer가 완전히 보여지는 경우에는 footer를 활성화)

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href = "${id}"]`));
const visible = sectionIds.map(() => false);

// 옵서버 콜백 함수
const observerCallback = (entries) => {
  let selectLastOne; // 플래그 변수
  
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visible[index] = entry.isIntersecting;
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99;
    // 관찰하고 있는 엔트리 중 해당 인덱스(섹션)이 가장 마지막 요소인지, 보여지고 있는지, 화면 상에 99% 정도 보여지고 있을 때에만 true로 설정
  })
  console.log(visible);
  console.log('라스트 섹션', selectLastOne)
  const navIndex = selectLastOne ? sectionIds.length - 1 : findFitstIntersecting(visible);
  console.log(sectionIds[navIndex])
};

function findFitstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

// 옵저버 세팅
const options = {}
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));


