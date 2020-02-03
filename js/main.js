// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};




jQuery(document).ready(function($) {

setTimeout( function() {  
  $('a.roistat-phone').each(function() {
    var phone = $(this).text();
    var newphone = '+' + phone;
    $(this).text(newphone);
}); }, 700);


/*---------------------------
                              ADD CLASS ON SCROLL
---------------------------*/
$(function() { 
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 0);
  });
});


/*---------------------------
                              MENU TOGGLE
---------------------------*/
let navMenu = function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('header').toggleClass('active');
  if ($('header').hasClass('active')) {
    $('body').css('overflow', 'hidden');
  } else {
    $('body').css('overflow', 'visible');
  }
}

// $('.menu-button').on('click', function(event) {
//   event.preventDefault();
//   $(this).toggleClass('active');
//   $(this).siblings('header').toggleClass('active');
//   if ($('header').hasClass('active')) {
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
// });

$('.menu-button').on('click', navMenu);
// $('#online').on('click', navMenu);


  var $sections = $('section');
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection;
    var windowHalf = $(window).height() / 1.5;
    
    $sections.each(function(){
      var divPosition = $(this).offset().top - windowHalf;
      
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);
      }
    var id = $currentSection.attr('id');
      $('a').removeClass('active');
      $("[href=#"+id+"]").addClass('active');
    })
  });

    $('nav a, .logo').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 140
        }, 800);
        $('.menu-button').removeClass('active');
      $('header').removeClass('active');
      if ($('header').hasClass('active')) {
          $('body').css('overflow', 'hidden');
        } else {
          $('body').css('overflow', 'visible');
        }
        return false;
    });


/*---------------------------------------------------*/
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.magnific-video').magnificPopup({
    type: 'iframe',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',

    iframe: {
      patterns: {
        youtube: {
          src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
        }
      }
    }
    
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $('.trust__slider').slick({
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.videos__slider').slick({
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// --------------карточки----------------

if ($(window).width() >= 1100) {
  var products = $(".four .prodBlock");
  var productsFive = $(".five .prodBlock");
  for(var i = 0; i < products.length; i+=4) {
     products.slice(i, i+4).wrapAll("<div class='row'></div>");
  }
  for(var i = 0; i < productsFive.length; i+=5) {
     productsFive.slice(i, i+5).wrapAll("<div class='row'></div>");
  }
}

if ($(window).width() <= 1099 && $(window).width() >= 601) {
  $(".prodBlock:nth-of-type(3n)").after('<hr>');
}

if ($(window).width() <= 600 && $(window).width() >= 501)  {
  $(".prodBlock:nth-of-type(2n)").after('<hr>');
}

  $('<hr>').insertAfter('.row');

  $('.row').each(function(){
    var $columns = $(this).children('.prodBlock');
    var height = 0;
    $columns.each(function () {
      if ($(this).height() > height) {
        height = $(this).height();
      }
    });
    $columns.height(height);
  });



  /*---------------------------
                                GOOGLE MAP
  ---------------------------*/
  var map;
  function googleMap_initialize() {
    var lat = $('#map_canvas').data('lat');
    var long = $('#map_canvas').data('lng');
    var img = $('#map_canvas').data('marker');
    var mapCenterCoord = new google.maps.LatLng(lat, long+0.003);
    var mapMarkerCoord = new google.maps.LatLng(lat, long);
    if ( $(window).width() < 1001 ) {
      mapCenterCoord = new google.maps.LatLng(lat, long);
      mapMarkerCoord = new google.maps.LatLng(lat, long);
    }
    $(window).resize(function(event) {
      if ( $(window).width() < 1001 ) {
        mapCenterCoord = new google.maps.LatLng(lat, long);
        mapMarkerCoord = new google.maps.LatLng(lat, long);
      } else {
        mapCenterCoord = new google.maps.LatLng(lat, long+0.003);
        mapMarkerCoord = new google.maps.LatLng(lat, long);
      }
    });

    var mapOptions = {
      center: mapCenterCoord,
      zoom: 16,
      //draggable: false,
      disableDefaultUI: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var markerImage = new google.maps.MarkerImage(img);
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: mapMarkerCoord, 
      map: map,
      title:"Домашний Сантехник"
    });
    
    $(window).resize(function (){
      map.setCenter(mapCenterCoord);
    });

    $('.zoom-in').on('click', function(event) {
      event.preventDefault();
      var zoom = map.getZoom();
      map.setZoom(zoom+1);
    });
    $('.zoom-out').on('click', function(event) {
      event.preventDefault();
      var zoom = map.getZoom();
      map.setZoom(zoom-1);
    });

  }
  if ( $('#map_canvas').length > 0) {
    googleMap_initialize();   
  }


  if(window.location.hash) {
    $('html, body').animate({
        scrollTop:$(window.location.hash).offset().top - 120
    }, 800);
}

});// end of file

// ------------------------
// let wrap = document.querySelector('.contact_wrap');
let buttonSend = document.getElementById('online');
let modalWrap = document.querySelector('.modal__wrap');
let modal = document.querySelector('.modal');
// let modalHw = document.getElementById('modalHw');
// let modalButtonEmail = document.getElementById('modalButtonEmail');
let form = document.getElementById('form');
let answer = document.getElementById('answer');

// let hover = function () {
//   document.addEventListener('click', function (el) {
//     if (el.target.classList == "main__img") {
//       wrap.classList.toggle('hover-contact');
//     } else (wrap.classList.remove('hover-contact'))
//   });
// };

// hover();

let modalShow = function () {
  modal.style.animation = 'modalOpacity 0.3s linear';
  modal.style.display = 'flex';
  modalWrap.style.animation = 'modalWrap 0.4s ease-out';
  // buttonSend.classList.add('button-send__hide');
  answer.style.display = 'none';
  // navMenu();
  $('.menu-button').trigger('click');
};

let modalClick = function () {
  modal.addEventListener('click', function (el) {
    if ((el.target.classList == "modal") || (el.target.classList == "modal__wrap-close")) {
      modalHide();
    };
  });
};

modalClick();

let modalHide = function () {
  modal.style.animation = 'modalOpacity1 0.3s linear';
  setTimeout(function () {
    modal.style.display = 'none';
    // buttonSend.classList.remove('button-send__hide');
    // modalWrap.style.maxHeight = '300px';
    form.style.display = 'flex';
    // modalButtonEmail.style.display = 'flex';
    // modalHw.style.display = 'block';
    answer.style.display = 'none';
  }, 300);
  modalWrap.style.animation = 'modalWrap1 0.4s ease-out';
  $('body').css('overflow', 'visible');
};

// let hideElementModal = function () {
//   // form.style.display = 'flex';
//   // modalWrap.style.maxHeight = '640px';
//   // modalButtonEmail.style.display = 'none';
//   modalHw.style.display = 'none';
// };

buttonSend.addEventListener('click', modalShow);
// buttonSend.addEventListener('click', navMenu);
// wrap.addEventListener('click', modalShow);
// modalButtonEmail.addEventListener('click', hideElementModal);

// форма, отправка письма
$(document).ready(function ($) {
  $('#check').on('click', function () {
    if ($("#check").prop("checked")) {
      $('#button').attr('disabled', false);
    } else {
      $('#button').attr('disabled', true);
    }
  });

  // Отправляет данные из формы на сервер и получает ответ
  $('#form').on('submit', function (event) {

    event.preventDefault();

    var form = $('#form'),
      button = $('#button'),
      answer = $('#answer'),
      loader = $('#loader');

    $.ajax({
      url: 'send.php',
      type: 'POST',
      data: form.serialize(),
      beforeSend: function () {
        answer.empty();
        button.attr('disabled', true).css('margin-bottom', '20px');
        loader.fadeIn();
      },

      success: function (result) {
        setTimeout(function () {
          // form.hide();
          // loader.fadeOut(300, function() {
          loader.fadeOut();
          answer.css('display', 'flex');
          answer.text('Сообщение успешно отправлено.');
          // });
        }, 600);
        setTimeout(function () {
          modalHide();  //см.функции выше
          $('#form').trigger("reset");
          $('#check').trigger("reset");
          button.attr('disabled', true);
        }, 1500);
        console.log('ok');
      },

      error: function () {
        loader.fadeOut(600, function () {
          // sForm.hide();
          answer.css('display', 'flex');
          answer.text('Произошла ошибка! Попробуйте позже.');
        });
        setTimeout(function () {
          answer.fadeOut(1700, function () {
            answer.hide();
          });
        }, 2800);
      }
    });
  });
});

// -------------форма, отправка письма-------------section form
$(document).ready(function ($) {
  $('#sectionCheck').on('click', function () {
    if ($('#sectionCheck').prop("checked")) {
      $('#sectionButton').attr('disabled', false);
    } else {
      $('#sectionButton').attr('disabled', true);
    }
  });

  // Отправляет данные из формы на сервер и получает ответ
  $('#sectionForm').on('submit', function (event) {

    event.preventDefault();

    var sForm = $('#sectionForm'),
      sButton = $('#sectionButton'),
      sAnswer = $('#sectionAnswer'),
      sLoader = $('#sectionLoader');

    $.ajax({
      url: 'send.php',
      type: 'POST',
      data: sForm.serialize(),
      beforeSend: function () {
        sAnswer.empty();
        sButton.attr('disabled', true).css('margin-bottom', '20px');
        sLoader.fadeIn();
      },

      success: function (result) {
        setTimeout(function () {
          // sForm.hide();
          // loader.fadeOut(300, function() {
          sLoader.fadeOut();
          sAnswer.css('display', 'flex');
          sAnswer.text('Сообщение успешно отправлено.');
          // });
        }, 600);
        setTimeout(function () {
          // modalHide();  //см.функции выше
          $('#sectionForm').trigger("reset");
          $('#sectionCheck').trigger("reset");
          sButton.attr('disabled', true);
          // sForm.show();
        }, 1500);
        console.log('ok');
      },

      error: function () {
        sLoader.fadeOut(600, function () {
          // sForm.hide();
          sAnswer.css('display','flex');
          sAnswer.text('Произошла ошибка! Попробуйте позже.');
        });
        setTimeout(function () {
          sAnswer.fadeOut(1700, function () {
            sAnswer.hide();
          });
        }, 2800);
        sButton.attr('disabled', false);
      }
    });
  });
});
// -------------------------------mask-----------------
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
// -------------------------------mask end-----------------