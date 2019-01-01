
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

new TypeIt('#maintitle', {
    strings: ["Schoolvpn.ca!", "The Fastest & Most Secure VPN", "Schoolvpn.ca!"],
    speed: 100,
    lifeLike: false,
    breakLines: false,
    autoStart: false
});