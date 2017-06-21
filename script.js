$(document).ready(function () {
  $(document).on("scroll", onScroll);
  resizeSection();

  window.onresize = function () {
    resizeSection();
  }

  function resizeSection() {
    var vpw = $(window).width();
    var vph = $(window).innerHeight();

    if (vpw > 499 && vph > 1000) {
      $(".full-page").css("height", vph - 100);
    } else {
      $(".full-page").removeProp("height");
    }
  }

  function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function (index) {
      var currentLink = $(this);
      console.log(currentLink);
      var refElement = "#" + currentLink.attr("data-id");
      if ($(refElement).position().top <= scrollPosition + 100) {
        $('nav li').removeClass("active");
        currentLink.parent().addClass("active");
      }
      else {
        currentLink.parent().removeClass("active");
      }
    });
  }

  $("ul li").click(function () {
    $("ul li.active").removeClass("active");
    $("ul li").addClass("inactive");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.removeClass("inactive");
      $this.addClass("active");
    }
    event.preventDefault();
  });

  $('.scroll-link').on('click', function () {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });

  $('#nav-toggle').on('click', function () {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });

  //scroll function
  function scrollToID(id, speed) {
    var offSet = 100;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({
      scrollTop: targetOffset
    }, speed);
    if (mainNav.hasClass("open")) {
      mainNav.css("height", "1px").removeClass("in").addClass("collapse");
      mainNav.removeClass("open");
    }
  }
});