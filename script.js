$(document).ready(function() {
  /*if ($(window).width() < 768) {
      $(".btn-responsive").addClass("btn-xs");
    } else {
      $(".btn-responsive").addClass("btn-lg");
    }*/
  resizeSection();
  
  window.onresize = function(event) {
    resizeSection();
    //center();
  }
  
  //center();
  $("ul li").click(function(event) {
    $("ul li.active").removeClass("active");
    $("ul li").addClass("inactive");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.removeClass("inactive");
      $this.addClass("active");
    }
    event.preventDefault();
  });

  $('.scroll-link').on('click', function(event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });

  $('#nav-toggle').on('click', function(event) {
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

  function resizeSection() {
    var vpw = $(window).width();
    var vph = $(window).innerHeight();
    if ($(window).innerHeight() > 900 && $(window).width() > 499) {
      $(".full-page").css("height", vph);
    } else {
      $(".full-page").removeProp("height");
      /*$("#Portfolio div").removeClass("full-page");
      $(".full-page").css("height", 900);*/
    }
  }

  /*function center() {
    var sectionWidth = $(".full-page").width();
    var sectionHeight = $(".full-page").innerHeight();
    var divWidth = $(".center").width();
    var divHeight = $(".center").height();
      $(".center").css("top", (sectionHeight/2)-(divHeight/2));
      $(".center").css("left", (sectionWidth/2)-(divWidth/2));
  }*/
});