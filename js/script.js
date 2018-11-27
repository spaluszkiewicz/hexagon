$(document).ready(function() {

  if($(window).width() > 768 ) {
    $(document).on("scroll", function () {

      if ($(document).scrollTop() > 10) {
        $("#navbar").removeClass("navbarclass").addClass('navbarclassSmall');
        $(".navbarclass").slideUp();
        $(".navbarlogo").fadeOut();
      } else {
        $("#navbar").removeClass("navbarclassSmall").addClass('navbarclass');
        $(".navbarlogo").slideDown();
        $('.triangle-down').hide();

        $('.triangle-down').delay(1000).fadeIn("slow");

      }
    });
  }


    $('.mobileMenuIcon').on('click', () => {
      $('.tangoDown').toggle();
  });



  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 1500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#navbar ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }

});
