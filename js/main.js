$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});

// slider
(function () {
  class SlideShow {
    constructor(startIndex, element) {
      this.startIndex = startIndex;//с какой картинки будем начинать
      this.currentIndex = this.startIndex;
      this.element = element;//нужен для того чтобы понимать с каким элементом будем работать
      this.slides = this.element.querySelectorAll('.slide');//будем искать элемент с классом .slide в SlideShow
      this.setActiveSlide();//будем устанавливать активный сдайдер
      this.next();//
      this.prev();//
    }

    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })

    }

    next() {
      let nextBtn = this.element.querySelector('[data-way="next"]');
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex === this.slides.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.setActiveSlide();//
    })

    }

    prev() {
      let prevBtn = this.element.querySelector('[data-way="prev"]');
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1;
      } else {
        this.currentIndex--;
      }
      this.setActiveSlide();
    })
    }
  }

  let slideShow = document.querySelectorAll('.slideshow');

  slideShow.forEach(item => {
    new SlideShow(0, item)
  })


}());

/*

const acc = document.getElementsByClassName(".accordion__item");
let i;
for(i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display == 'block' ?  panel.style.display ='none' :  panel.style.display = 'block';

  });

}
*/
/*(function Accordion() {
  const[...accordion_containers] = document.querySelectorAl('[data-collapse]');

  acordion_containers.forEach((accordion)=>{
    const[...accordion_titles] = accordion.querySelectorAll('.accordion__item');

    accordion_titles.forEach((title) => {
      title.addEventListener('click', ()=> open(title, accordion_titles))
    })
  });
  function open(title, siblings) {
    siblings.forEach(item => item.classList.remove('active'));
    title.calssList.add('active');
  }

})();*/

$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('collapse');

  $this.toggleClass("active");
});