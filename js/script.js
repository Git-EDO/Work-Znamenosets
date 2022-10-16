// Управление бургер-меню

const openMenu = document.querySelector('.header-burger')
const closeMenu = document.querySelector('.burger-menu-header')
const menu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const header = document.querySelector('header')

openMenu.addEventListener('click', () => {
  menu.classList.add('active')
  body.classList.add('lock')
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active')
  body.classList.remove('lock')
})


// Управление попапом

const popup = document.querySelector('.popup')
const openPopup = document.querySelector('.footer-btn')
const closePopup = document.querySelector('.close-popup')

openPopup.addEventListener('click', (e) => {
  e.preventDefault()
  popup.classList.add('active')
  body.classList.add('lock')
})

closePopup.addEventListener('click', () => {
  popup.classList.remove('active')
  body.classList.remove('lock')
})

// Управление цветом хэдера при скролле

window.addEventListener('scroll', () => {
  let windowScrollTop = window.pageYOffset;
  if (windowScrollTop > 70) {
    header.style.backgroundColor = 'var(--dark-green)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})

// Перемещение по странице по клику на ссылки

const zmamenosetsScroll = document.querySelectorAll('.znamenosets')
const beriaScroll = document.querySelectorAll('.beria')
const ukScroll = document.querySelectorAll('.uk')


zmamenosetsScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    menu.classList.remove('active')
    body.classList.remove('lock')
    setTimeout(() => {
      const main = document.querySelector('.main-title');
      main.scrollIntoView({block: "start", behavior: "smooth"});
    }, 550)
});
});
beriaScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    menu.classList.remove('active')
    body.classList.remove('lock')
    setTimeout(() => {
    const classes = document.querySelector('.classes-speaks');
    classes.scrollIntoView({block: "start", behavior: "smooth"});
    }, 550)
});
});
ukScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    menu.classList.remove('active')
    body.classList.remove('lock')
    setTimeout(() => {
    const ukWar = document.querySelector('.uk-war');
    ukWar.scrollIntoView({block: "start", behavior: "smooth"});
  }, 550)
});
});