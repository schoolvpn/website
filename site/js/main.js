
(function ($) {
    "use strict";
    /*==================================================================
    [ Modal ]*/
    $('.modal-subscribe').on('click',function(e){
        e.stopPropagation();
    })
    
    $('.btn-close-modal').on('click', function(){
        $('#subscribe').modal('hide');
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