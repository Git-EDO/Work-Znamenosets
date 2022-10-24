// Управление бургер-меню

const openMenu = document.querySelector('.header-burger')
const closeMenu = document.querySelector('.burger-menu-header')
const menu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const header = document.querySelector('header')

const lockPaddingEls =  document.querySelectorAll('.lock-padding');

// openMenu.addEventListener('click', () => {
//   bodyLock()
//   menu.classList.add('active')
// })

// closeMenu.addEventListener('click', () => {
//   bodyUnlock()
//   menu.classList.remove('active')
// })

// document.addEventListener('click', (e) => {
//   if(menu.classList.contains('active') && !e.target.closest('.burger-menu') && !e.target.closest('.header-burger')) {
//     bodyUnlock()
//     menu.classList.remove('active')
//   }
// })

// Body lock

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  lockPaddingEls.forEach(element => {
    element.style.paddingRight = lockPaddingValue;
  });

  body.classList.add('lock');
}

function bodyUnlock() {
  lockPaddingEls.forEach(element => {
    element.style.paddingRight = 0;
  })

  body.classList.remove('lock')
}

// Управление попапом

const popup = document.querySelector('.popup')
const openPopup = document.querySelector('.footer-btn')
const closePopup = document.querySelector('.close-popup')

openPopup.addEventListener('click', (e) => {
  e.preventDefault()
  bodyLock()
  popup.classList.add('active')
})

closePopup.addEventListener('click', () => {
  bodyUnlock()
  popup.classList.remove('active')
})

popup.addEventListener('click', (e) => {
  if(!e.target.closest('.popup-body')) {
    bodyUnlock()
    popup.classList.remove('active')
  }
})

// Управление цветом хэдера при скролле

window.addEventListener('scroll', () => {
  let windowScrollTop = window.pageYOffset;
  if (windowScrollTop > 70) {
    header.style.backgroundColor = 'var(--dark-green)';
    header.style.boxShadow = '2px 2px 8px rgba(0,0,0,0.2)'
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
})

// Перемещение по странице по клику на ссылки

const zmamenosetsScroll = document.querySelectorAll('.znamenosets')
const beriaScroll = document.querySelectorAll('.beria')
const ukScroll = document.querySelectorAll('.uk')


zmamenosetsScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    bodyUnlock()
    menu.classList.remove('active')
    setTimeout(() => {
      const main = document.querySelector('.main-title');
      main.scrollIntoView({block: "start", behavior: "smooth"});
    }, 550)
});
});
beriaScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    bodyUnlock()
    menu.classList.remove('active')
    setTimeout(() => {
    const classes = document.querySelector('.classes-speaks');
    classes.scrollIntoView({block: "start", behavior: "smooth"});
    }, 550)
});
});
ukScroll.forEach(link => {
  link.addEventListener ('click', function(e) {
    e.preventDefault();
    bodyUnlock()
    menu.classList.remove('active')
    setTimeout(() => {
    const ukWar = document.querySelector('.uk-war');
    ukWar.scrollIntoView({block: "start", behavior: "smooth"});
  }, 550)
});
});