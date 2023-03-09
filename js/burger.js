// burger-menu

(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav')
  const closeMenu = document.querySelector('.header-nav-close');
  const menuLinks = document.querySelectorAll('.header-link');

  burger.addEventListener('click', () => {
      menu.classList.add('header-nav-active');
  });
  closeMenu.addEventListener('click', () =>{
      menu.classList.remove('header-nav-active');
  });
  if (window.innerWidth <= 1199) {
      for (let i = 0; i < menuLinks.length; i++) {
          menuLinks[i].addEventListener('click', () => {
              menu.classList.remove('header-nav-active');
          });
      }
  }
}());


// Кусочки кода

// <div class="header-nav-close">
{/* <span class="header-nav-close-line"></span>
<span class="header-nav-close-line"></span>
</div> */}

// .header-nav {
//   position: fixed;
//   top: 0;
//   left: 0;
//   transform: translateX(100%);
//   width: 100%;
//   height: 100%;
//   padding: 75px;
//   background-color: rgba(36, 40, 43, 0.9);
//   transition: 0.2s all linear;
//   z-index: 15;
// }

// .header-nav-active {
//   transform: translateX(0);
// }

// .header-item {
//   width: 100%;
//   margin-right: 0;
//   margin-bottom: 15px;
//   padding-bottom: 10px;
//   border-bottom: 3px solid #eeeeee;
// }

// .header-item:last-child {
//   margin-bottom: 0;
// }

// .header-link {
//   font-size: 20px;
//   line-height: 24px;
// }
