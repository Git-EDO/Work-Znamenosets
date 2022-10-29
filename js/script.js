// Управление бургер-меню

const openMenu = document.querySelector('.header-burger')
const menu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const header = document.querySelector('header')

const lockPaddingEls =  document.querySelectorAll('.lock-padding');

openMenu.addEventListener('click', () => {
  bodyLock()
  menu.classList.toggle('active')
})

// Body lock

function bodyLock() {

  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  if(body.classList.contains('lock')) {
    body.classList.remove('lock');
    lockPaddingEls.forEach(element => {
      element.style.paddingRight = 0
    })
  } else {
    body.classList.add('lock');

    lockPaddingEls.forEach(element => {
      element.style.paddingRight = lockPaddingValue
    })
  }
}

// Управление попапом

const popup = document.querySelector('.popup')
const openPopupBtns = document.querySelectorAll('.support-btn')
const closePopup = document.querySelector('.close-popup')

openPopupBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    bodyLock()
    popup.classList.add('active')
  })
})

popup.addEventListener('click', (e) => {
  if(!e.target.closest('.popup-body')) {
    bodyLock()
    popup.classList.remove('active')
  }
})

closePopup.addEventListener('click', (e) => {
  e.preventDefault()
  bodyLock()
  popup.classList.remove('active')
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
    bodyLock()
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
    bodyLock()
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
    bodyLock()
    menu.classList.remove('active')
    setTimeout(() => {
    const ukWar = document.querySelector('.uk-war');
    ukWar.scrollIntoView({block: "start", behavior: "smooth"});
  }, 550)
});
});

const footerZmamenosetsScroll = document.querySelectorAll('.footer-znamenosets')
const footerBeriaScroll = document.querySelectorAll('.footer-beria')
const footerUkScroll = document.querySelectorAll('.footer-uk')

footerZmamenosetsScroll.forEach(btn => {
  btn.addEventListener ('click', function(e) {
    e.preventDefault();
      const main = document.querySelector('.main-title');
      main.scrollIntoView({block: "start", behavior: "smooth"});
});
})

footerBeriaScroll.forEach(btn => {
  btn.addEventListener ('click', function(e) {
    e.preventDefault();
    const classes = document.querySelector('.classes-speaks');
    classes.scrollIntoView({block: "start", behavior: "smooth"});
});
})

footerUkScroll.forEach(btn => {
  btn.addEventListener ('click', function(e) {
    e.preventDefault();
    const ukWar = document.querySelector('.uk-war');
    ukWar.scrollIntoView({block: "start", behavior: "smooth"});
});
})


// Mailer


jQuery(document).ready(function () {
     
  jQuery('.send-form').click( function() {
    var form = jQuery(this).closest('form');
    
    if ( form.valid() ) {
      form.css('opacity','.5');
      var actUrl = form.attr('action');
 
      jQuery.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function(data) {
          form.html(data);
          form.css('opacity','1');
            var url = "https://vk.com/donut/public214355387";
            $(location).attr('href',url);
        },
        error:	 function() {
             console.log('Возникла какая-то ошибка')
        }
      });
    }
  });
 
 
 });

