var main = function(){
    $('.menu-open').click(function(){
        // slide in menu
        $('.menu').animate(
            { left: '0px'}, 200
        );
        $('body').animate(
            { left: '285px'}, 200
        );
        // hide hamburger icon
        $('.menu-open').fadeOut(300);
    });
    
    $('.menu-close').click(function(){
        // slide out menu
        $('.menu').animate(
            { left: '-285px'}, 200
        );
        $('body').animate(
            { left: '0px'}, 200
        );
        // show hamburger icon
        $('.menu-open').fadeIn(400);
        
    });
};

$(document).ready(main);