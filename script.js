$(document).ready(function () {
  var enableScroll = true;

  $(document).on('scroll', function () {
    if (enableScroll === true) {
      onScroll();
    }
  });

  function resizeSection() {
    var vpw = $(window).width();
    var vph = $(window).innerHeight();

    if (vpw > 499 && vph > 1000) {
      $('.full-page').css('height', vph - 100);
    } else {
      $('.full-page').removeProp('height');
    }
  }

  function onScroll() {
    var scrollPosition = $(document).scrollTop();
    $('.navbar-right a').each(function () {
      var currentLink = $(this);
      var refElement = '#' + currentLink.attr('data-id');
      if ($(refElement).position().top <= scrollPosition + 100
        && $(refElement).position().top + $(refElement).height() > scrollPosition + 100) {
        $('nav li').removeClass('active');
        currentLink.parent().removeClass('inactive');
        currentLink.parent().addClass('active');
      }
      else {
        currentLink.parent().removeClass('active');
        currentLink.parent().addClass('inactive');
      }
    });
  }

  $('.navbar-right li').click(function () {
    enableScroll = false;
    $('.navbar-right li.active').removeClass('active');
    $('.navbar-right li').addClass('inactive');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.removeClass('inactive');
      $this.addClass('active');
    }
    event.preventDefault();
  });

  $('.scroll-link').on('click', function () {
    event.preventDefault();
    var sectionID = $(this).attr('data-id');
    scrollToID('#' + sectionID, 750);
  });

  $('#nav-toggle').on('click', function () {
    event.preventDefault();
    $('#main-nav').toggleClass('open');
  });

  //scroll function
  function scrollToID(id, speed) {
    var offSet = 100;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({
      scrollTop: targetOffset
    }, speed);
    if (mainNav.hasClass('open')) {
      mainNav.css('height', '1px').removeClass('in').addClass('collapse');
      mainNav.removeClass('open');
    }
    setTimeout(() => enableScroll = true, 800);
  }

  $('.contact').submit(function (event) {
    var name = document.getElementById('inputName');
    var email = document.getElementById('inputEmail');
    var message = document.getElementById('inputMessage');
    alertify.set('notifier', 'position', 'bottom-right');

    if (!name.value || !email.value || !message.value) {
      alertify.error('Please check your entries');
    } else {
      $.ajax({
        url: "https://formspree.io/aballinger1981@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });
      $(this).get(0).reset();
      alertify.success('Message sent', 5);
    }
    event.preventDefault();
  });
});