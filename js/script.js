const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    autoplay: {
        delay: 5000,
      },
  });

  const swiper2 = new Swiper('.swiper2', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 5000,
      },
  });

  // hamburger menu JS

  const hamb = document.querySelector('.menu-hamburger')
  const crossmenu = document.querySelector('.cross-f-awesome')
  const overlaymenu = document.querySelector('.overlay-menu')

  const menusection = document.querySelector('.menubar-section')

  

  hamb.addEventListener('click', function(){
    showMenu();
  })

  crossmenu.addEventListener('click', function(){
    showMenu();
  })

  overlaymenu.addEventListener('click', function(){
    showMenu();
  })
  

  function showMenu(){

    if(menusection.classList.contains('left-menus')){
      menusection.classList.remove('left-menus')
      overlaymenu.classList.add('d-none')
    }
    else{
      menusection.classList.add('left-menus')
      overlaymenu.classList.remove('d-none')
    }
  }