const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const Allsections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
  nav.classList.toggle('nav--active')

  allNavItems.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('nav--active')
    })
  })

  handleNavItemsAnimation()
  deleteAnimation()
}

const handleNavItemsAnimation = () => {
  let delayTime = 0

  allNavItems.forEach(item => {
    item.classList.toggle('nav-items-animation')
    item.style.animationDelay = '.' + delayTime + 's'
    delayTime++
  })
}

navBtn.addEventListener('click', handleNav)

const deleteAnimation = () => {
  allNavItems.forEach(item => {
    item.addEventListener('click', () => {
      allNavItems.forEach(el => {
        el.classList.remove('nav-items-animation')
      })
    })
  })
}


const handleObserver = () => {
  const currentSection = window.scrollY;

  Allsections.forEach(section => {
    if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
      navBtnBars.classList.add('black-bars-color')
    }
    else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
      navBtnBars.classList.remove('black-bars-color')
    }
  })
}

const HandleCurrentYear = () => {
  const year = new Date().getFullYear()
  footerYear.innerText = year
}

HandleCurrentYear();


window.addEventListener('scroll', handleObserver)