/*!

 =========================================================
 * Paper Kit - v2.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;
var backgroundOrange = false;
var sidebar_mini_active = false;
var toggle_initialized = false;

$(document).ready(function() {
  window_width = $(window).width();

  // Initialize Navbar
  if($('.navbar[color-on-scroll]').length != 0){
    pk.initNavbarImage();
  }

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
  if($('.navbar[color-on-scroll]').length != 0){
    pk.checkScrollForTransparentNavbar();
    $(window).on('scroll', pk.checkScrollForTransparentNavbar)
  }

  $('.form-control').on("focus", function(){
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function(){
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  // Activate bootstrapSwitch
  $('.bootstrap-switch').each(function(){
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';

    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });

  // 슬라이더가 있을 때만 초기화
  if ($('#sliderRegular').length > 0 || $('#sliderDouble').length > 0) {
    pk.initSliders();
  }

  // Init popovers
  if ($('[data-toggle="popover"]').length != 0) {
    pk.initPopovers();
  }

  // Activate the image for the navbar-collapse
  pk.initNavbarImage();

  if ($(".sections-page").length != 0) {
    $('a[data-scroll="true"]').click(function(e) {
      var t = $(this).data("id");
      1 == $(this).data("scroll") && void 0 !== t && (e.preventDefault(),
        $("html, body").animate({
          scrollTop: $(t).offset().top - 50
        }, 1e3))
    });
  }

  $('.navbar-collapse a[data-scroll="true"]').click(function() {
    setTimeout(function() {
      1 == pk.misc.navbar_menu_visible && ($("html").removeClass("nav-open"),
        pk.misc.navbar_menu_visible = 0,
        $("#bodyClick").remove(),
        setTimeout(function() {
          $toggle.removeClass("toggled")
        }, 550))
    }, 550)
  });

  //  Activate the tooltips
  if ($('[data-toggle="tooltip"]').length != 0) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //  Activate regular switches
  if ($("[data-toggle='switch']").length != 0) {
    $("[data-toggle='switch']").bootstrapSwitch();
  }

  //  Append modals to <body>
  if ($(".modal").length != 0) {
    $('.modal').appendTo('body');
  }

  // Activate Carousel
  $('.carousel').carousel({
    interval: 4000
  });

});

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (pk.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    pk.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeClass('nav-open');
      pk.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    pk.misc.navbar_menu_visible = 1;
  }
});

pk = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),

  initNavbarImage: function() {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');

    if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
      if (background_image != undefined) {
        $navbar.css('background', "url('" + background_image + "')")
          .removeAttr('data-nav-image')
          .css('background-size', "cover")
          .addClass('has-image');
      }
    } else if (background_image != undefined) {
      $navbar.css('background', "")
        .attr('data-nav-image', '' + background_image + '')
        .css('background-size', "")
        .removeClass('has-image');
    }
  },

  initPopovers: function() {
    if ($('[data-toggle="popover"]').length != 0) {
      $('body').append('<div class="popover-filter"></div>');

      //    Activate Popovers
      $('[data-toggle="popover"]').popover().on('show.bs.popover', function() {
        $('.popover-filter').click(function() {
          $(this).removeClass('in');
          $('[data-toggle="popover"]').popover('hide');
        });
        $('.popover-filter').addClass('in');
      }).on('hide.bs.popover', function() {
        $('.popover-filter').removeClass('in');
      });

    }
  },

  initSliders: function() {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');
    var slider2 = document.getElementById('sliderDouble');

    if (slider) {
      noUiSlider.create(slider, {
        start: 40,
        connect: [true,false],
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (slider2) {
      noUiSlider.create(slider2, {
        start: [ 20, 60 ],
        connect: true,
        range: {
          min:  0,
          max:  100
        }
      });
    }
  },

  // Javascript for the parallax

  checkScroll: debounce(function() {
    big_image = $('.page-header[data-parallax="true"]');
    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  }, 4),
}

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

function hasScrolled() {
  var st = $(this).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.navbar.nav-down').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.navbar.nav-up').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};
