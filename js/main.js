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
$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('header').toggleClass('active');
  if ($('header').hasClass('active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
});


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
