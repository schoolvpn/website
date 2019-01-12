
(function ($) {
    "use strict";
    /*==================================================================
    [ Modal ]*/
    $('.modal-download').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#download').modal('hide');
    });

    $('.modal-ios').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#ios').modal('hide');
    });

    $('.modal-windows').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#windows').modal('hide');
    });

    $('.modal-android').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#android').modal('hide');
    });

    $('.modal-chrome').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#chrome').modal('hide');
    });

    $('.modal-firefox').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#firefox').modal('hide');
    });

    $('.modal-opera').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#opera').modal('hide');
    });
    

})(jQuery);

tippy.setDefaults({
    delay: 100,
    allowHTML: true,
    arrow: true,
    theme: "light",
    arrowType: 'round',
    size: 'small',
    duration: 100,
    placement: 'bottom',
    animation: 'scale'
  })

new TypeIt('#maintitle',{
    strings: ["Schoolvpn.ca", "The Fastest & Most Secure VPN", "Schoolvpn.ca"],
    speed: 100,
    lifeLike: false,
    breakLines: false,
    autoStart: false
});


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//some default pre init
var Countly = Countly || {};
Countly.q = Countly.q || [];

//provide countly initialization parameters
Countly.app_key = '1cae2c981438fd40df3ce894c5f0e1ea6d89b5b0';
Countly.url = 'https://analytics.schoolvpn.ca';

Countly.q.push(['track_sessions']);
Countly.q.push(['track_pageview']);
Countly.q.push(['track_clicks']);
Countly.q.push(['track_scrolls']);
Countly.q.push(['track_errors']);
Countly.q.push(['track_links']);
Countly.q.push(['track_forms']);
Countly.q.push(['collect_from_forms']);

//load countly script asynchronously
(function() {
    var cly = document.createElement('script'); cly.type = 'text/javascript';
    cly.async = true;
    //enter url of script here
    cly.src = 'https://cdnjs.cloudflare.com/ajax/libs/countly-sdk-web/18.8.2/countly.min.js';
    cly.onload = function(){Countly.init()};
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
})();