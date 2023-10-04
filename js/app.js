new Swiper(".slider", {
  // направление движения
  // direction: 'vertical',

  //Свободный режим перетаскивания слайдов без фиксированных
  //freeMode: true,

  //скорость
  speed: 2400,

  parallax: true,

  //Отступ между слайдами
  spaceBetween: 18,
  mousewheel: {
    //вкл/выкл колесо мыши
    enabled: true,

    //чувствительность колеса мыши
    sensitivity: 2.4,
  },
});
