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
      this.startIndex = startIndex;
      this.currentIndex = this.startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll('.slideshow__slide');
      this.setActiveSlide();
      this.next();
      this.prev();
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
        this.setActiveSlide();
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


(()=>{
  const acc = document.getElementsByClassName("accordion__header");
  for(let i=0; i < acc.length; i++) {
    acc[i].addEventListener('click', toggleAccordion)
  }

  function toggleAccordion() {
    let accContent = this.nextElementSibling;
    let accIcon = this.getElementsByClassName('accordion__icon')[0];
    if (accContent.className === 'accordion__content'){
      accContent.className = 'accordion__content open';
      accIcon.innerHTML = '-';
    } else {
      accContent.className = 'accordion__content';
      accIcon.innerHTML = '+';
    }
  }
})();

/*
$("[data-collapse]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('collapse');

  $this.toggleClass("active");
});*/
