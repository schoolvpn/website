
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