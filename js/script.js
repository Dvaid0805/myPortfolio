const typed = new Typed('.typing', {
  strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
});

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSections = document.querySelectorAll('.section');
const totalSection = allSections.length;
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

const asideSectionTogglerBtn = () => {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++ ) {
    allSections[i].classList.toggle('open');
  }
}

const showSection = (element) => {
  for ( let i = 0; i < totalSection; i++ ) {
    allSections[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active')
}

const updateNav = (element) => {
  for ( let i = 0; i < totalNavList; i++ ) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];

    if ( target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

const addBackSection = (num) => {
  allSections[num].classList.add('back-section');
}

const removeBackSection = () => {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove('back-section')
  }
}

navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

document.querySelector('.hire-me').addEventListener('click', function() {
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function() {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

