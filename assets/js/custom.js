// ====================================
// brand slider
// ====================================
$(".owl-carousel.owl-theme.main-banner-slider").owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  margin: 20,
  stagePadding: 5,
  nav: false,
  dots: true,
  center: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// ====================================
// brand slider
// ====================================
$(".owl-carousel.owl-theme.brand-owl-slider").owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  margin: 20,
  stagePadding: 5,
  nav: true,
  dots: false,
  center: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// ========================
// navbar sticky
// ========================
(function ($) {
  "use strict";
  $(document).ready(function () {
    var primaryHeader = $(".primary-header"),
      headerClone = primaryHeader.clone();
    $(".header").after('<div class="sticky-header"></div>');
    $(".sticky-header").html(headerClone);
    var headerSelector = document.querySelector(".sticky-header");
    var triggerPoint = $(".header").height() - 40;
    var yOffset = 0;

    $(window).on("scroll", function () {
      yOffset = $(window).scrollTop();
      if (yOffset >= triggerPoint) {
        $(".sticky-header").addClass("sticky-fixed-top");
      } else {
        $(".sticky-header").removeClass("sticky-fixed-top");
      }
    });

    if ($(".primary-header").length) {
      $(".header .primary-header .burger-menu").on("click", function () {
        $(this).toggleClass("menu-open");
        $(".header .header-menu-wrap").slideToggle(300);
      });

      $(".sticky-header .primary-header .burger-menu").on("click", function () {
        $(this).toggleClass("menu-open");
        $(".sticky-header .header-menu-wrap").slideToggle(300);
      });
    }

    $(".header-menu-wrap ul li:has(ul)").each(function () {
      $(this).append('<span class="dropdown-plus"></span>');
      $(this).addClass("dropdown_menu");
    });

    $(".header-menu-wrap .dropdown-plus").on("click", function () {
      $(this).prev("ul").slideToggle(300);
      $(this).toggleClass("dropdown-open");
      $(".header-menu-wrap ul li:has(ul)").toggleClass("dropdown-open");
    });

    $(".header-menu-wrap .dropdown_menu a").append("<span></span>");

    // Responsive Classes
    function responsiveClasses() {
      var body = $("body");
      if ($(window).width() < 992) {
        body.removeClass("viewport-lg");
        body.addClass("viewport-sm");
      } else {
        body.removeClass("viewport-sm");
        body.addClass("viewport-lg");
      }
    }

    //responsiveClasses();
    $(window)
      .on("resize", function () {
        responsiveClasses();
      })
      .resize();

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationDuration = $this.data("duration");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
          "animation-duration": $animationDuration,
          "-webkit-animation-duration": $animationDuration,
        });
        $this
          .addClass($animationType + " element")
          .one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
      });
    }

    //Food Carousel
    const foodCarousel = document.querySelector(".food-carousel");
    const swiperOptions = {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      grabCursor: true,
      speed: 500,
      spaceBetween: 10,
      mousewheel: false,
      initialSlide: 2,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".dl-slider-button-next",
        prevEl: ".dl-slider-button-prev",
      },
      pagination: {
        el: ".dl-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            '<svg class="dl-circle-loader" width="20" height="20" viewBox="0 0 20 20">' +
            '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"' +
            'stroke-opacity="1" stroke-width="2px"></circle>' +
            '<circle class="solid-fill" cx="10" cy="10" r="3"></circle>' +
            "</svg></span>"
          );
        },
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        // when window width is >= 767px
        767: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      },
    };
  });
})(jQuery);
