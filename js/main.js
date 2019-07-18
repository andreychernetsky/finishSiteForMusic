$(function () {
  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });
  $('select').styler();
  $('.header__btn-menu').on('click', function () {
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
        if(index === this.currentIndex
    )
      {
        item.classList.add('active');
      }
    else
      {
        item.classList.remove('active');
      }
    })
    }

    next() {
      let nextBtn = this.element.querySelector('[data-way="next"]');
      nextBtn.addEventListener('click', () => {
        if(this.currentIndex === this.slides.length - 1
    )
      {
        this.currentIndex = 0;
      }
    else
      {
        this.currentIndex++;
      }
      this.setActiveSlide();
    })
    }

    prev() {
      let prevBtn = this.element.querySelector('[data-way="prev"]');
      prevBtn.addEventListener('click', () => {
        if(this.currentIndex === 0
    )
      {
        this.currentIndex = this.slides.length - 1;
      }
    else
      {
        this.currentIndex--;
      }
      this.setActiveSlide();
    })
    }
  }

  let slideShow = document.querySelectorAll('.slideshow');
  slideShow.forEach(item => {
    new SlideShow(0, item)
  }
)
}());


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderH__item ");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }



/* const acc = document.getElementsByClassName("accordion__header");
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
 }*/
(function acc() {
  let copyOpen = "accordion__copy--open";
  let titles = document.querySelectorAll(".js-title");
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", toggleItem, false);
  }

  function toggleItem(e) {
    let openCopy = document.querySelector("." + copyOpen);
    let sameElem = false;
    if (openCopy) {
      closeItem(openCopy);
      sameElem = openCopy.previousElementSibling === e.target;
    }
    if (!sameElem) {
      let panel = e.target.nextElementSibling;
      openItem(panel);
    }
  }

  function closeItem(openCopy) {
    openCopy.classList.remove(copyOpen);
    openCopy.style.maxHeight = 0;
    openCopy.style.padding = "0 1.5rem 0 1.5rem";
  }

  function openItem(panel) {
    panel.classList.add(copyOpen);
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.padding = "1rem 1.5rem 2rem 1.5rem";
  }

  let defaultPanel = document.querySelector(".accordion__copy");
  if (defaultPanel) {
    defaultPanel.classList.remove(copyOpen);
    setTimeout(openItem, 1000, defaultPanel);
  }
}());
