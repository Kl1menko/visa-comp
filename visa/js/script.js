const burgerMenu = document.getElementById('burger-menu');
const menu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.header-menu_item');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

// Додаємо обробник події для кожного елемента меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
      menu.classList.remove('open');
    }
  });
});


// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active')
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'))
        parent.classList.add('accordion__item-active')
      }
    })
  })
}
accordion()





document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.about-managers_trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentBlock = trigger.closest('.about-managers_accordion-block');

      if (parentBlock.classList.contains('active')) {
        parentBlock.classList.remove('active');
      } else {
        // Если нужно закрывать другие блоки при открытии одного, раскомментируйте следующий код:
        // document.querySelectorAll('.about-managers_accordion-block.active').forEach(activeBlock => {
        //   activeBlock.classList.remove('active');
        // });

        parentBlock.classList.add('active');
      }
    });
  });
});

window.scrollTo({
  top: 10, // кількість пікселів зверху
  behavior: 'smooth' // плавність анімації
});
