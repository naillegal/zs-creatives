// partnership slider
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 8,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 8,
    },
  },
});

// clientsreview slider
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

// copyright autochange year
document.getElementById("year").textContent = new Date().getFullYear();

// responsive-navbar
$(document).ready(function () {
    $(".inside-ul").hide();
  
    function hideResponsiveMenu() {
      $(".fa-bars")
        .removeClass("fa-x")
        .addClass("fa-bars")
        .css("transform", "rotate(0deg)");
      $("body").removeClass("overflow-hidden");
      $(".responsive-openmenu").animate({ left: "-100%" }, 400, function () {
        $(this).hide();
      });
    }
  
    if ($(window).width() >= 992) {
      hideResponsiveMenu();
    }
  
    $(".fa-bars").click(function () {
      $(this).toggleClass("fa-bars fa-x");
  
      if ($(this).hasClass("fa-x")) {
        $(this).css("transform", "rotate(180deg)");
        $("body").addClass("overflow-hidden");
        $(".responsive-openmenu")
          .css("overflow", "auto")
          .show()
          .animate({ left: "0" }, 400);
      } else {
        $(".responsive-openmenu").animate({ left: "-100%" }, 400, function () {
          $(this).hide();
        });
        $("body").removeClass("overflow-hidden");
        $(this)
          .removeClass("fa-x")
          .addClass("fa-bars")
          .css("transform", "rotate(0deg)");
      }
    });
  
    $(".isopenmenu").click(function () {
      var $chevronIcon = $(this).find(".fa-chevron-down");
      $(this).siblings(".inside-ul").slideToggle();
      $(this)
        .siblings(".isopenmenu")
        .find(".fa-chevron-down")
        .removeClass("rotate")
        .css("transform", "rotate(0deg)");
      $chevronIcon.toggleClass("rotate");
  
      if ($chevronIcon.hasClass("rotate")) {
        $chevronIcon.css("transform", "rotate(180deg)");
      } else {
        $chevronIcon.css("transform", "rotate(0deg)");
      }
    });
  
    $(window).on("resize", function () {
      if ($(window).width() >= 992) {
        hideResponsiveMenu();
      }
    });
  });
  
  