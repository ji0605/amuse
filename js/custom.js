mainSlide(); 
productSlide();


function mainSlide() {
  constSlide = new Swiper('.main-visual-slide', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.main-visual-slide .page',
          clickable: true
        },
        navigation: {
          nextEl: '.main-visual-slide .arrows .prev',
          prevEl: '.main-visual-slide .arrows .next',
        },
  });

}

function productSlide() {

  const slide = new Swiper('.main-product-slide',{
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,

    pagination: {
      el: '/main-product .page',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: '.main-product .arrows .prev',
      prevEl: '.main-product .arrows .next',
    },
  });
}