window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.slider-1', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.brands-section__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      550: {
        slidesPerView: 2.3
      },
      650: {
        slidesPerView: 2.8
      },
      700: {
        slidesPerView: 3
      }
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-2  ', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.repair-section__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      550: {
        slidesPerView: 2.3
      },
      650: {
        slidesPerView: 2.8
      },
      700: {
        slidesPerView: 3
      }
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-3  ', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.price-section__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.2
      },
      360: {
        slidesPerView: 1.3
      },
      450: {
        slidesPerView: 1.8
      },
      550: {
        slidesPerView: 2.3
      },
      650: {
        slidesPerView: 2.5
      },
      700: {
        slidesPerView: 2.8
      }
    }
  })
})
