(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
   
    /**
     * career carousel indicators
     */
    let careersCarouselIndicators = select("#career-carousel-indicators")
    let careersCarouselItems = select('#careersCarousel .carousel-item', true)
  
    careersCarouselItems.forEach((item, index) => {
      (index === 0) ?
      careersCarouselIndicators.innerHTML += "<li data-bs-target='#careersCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
        careersCarouselIndicators.innerHTML += "<li data-bs-target='#careersCarousel' data-bs-slide-to='" + index + "'></li>"
    });
  
    
  })()