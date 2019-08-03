
jQuery(function(){
    $('.open_content').on("click", function(){
       $(this).parent().parent().parent().addClass('active');
    });
    $('.content_hidd .close').on("click", function(){
        $(this).parent().parent().parent().removeClass('active');
    });
    
    $('#card .open_form1').mousedown(function(){
        $(this).closest('.fancybox-skin').find('.fancybox-close').click();
        setTimeout(function(){$('#gde .open_form').click();}, 100);
        return false;
    });

    $(".nav.menu a").bind("click", function(e){
        var anchor = $(this);
        $('html').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60 }, 1000);
        e.preventDefault();
        return false;
    });

        
});
$(document).ready(function() {
    $('.open-modal').fancybox({
        width: '100%',
        maxWidth: 950,
        fitToView: false,
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        background: '#fff',
        padding:0
    });
    $('.open_form').fancybox({
        width: '100%',
        maxWidth: 400,
        fitToView: false,
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        background: '#fff',
        padding:0
    });
});




$(document).ready(function() {
    
    $('.item_menu').click(function(e){
        
        $(window).scrollTop($($(this).attr('href')).position().top-120);
        
        e.preventDefault();
        
    });
    
    var is_word = false;
    $(".word_list").hide();
    var header = $('.header');
    
    $('.dlya_chego_m').click(function(){
        $(".word_list").show();
            $(".word_list .item").lettering('words');
            $(".word_list .item span").lettering();
            is_word = true;
            var time = 500;

/*
    $cards.each(function() {
        setTimeout( function(){ addPositioningClass($(this)); }, time)
        time += 500;
    });
*/


    $('.word_list .item').each(function(i,elem) {

        var title1 = new TimelineMax();
        var qqq = $(this).attr('class');
        var qqq2;

        qqq2 = qqq.replace(/(^|\s)/g, '$1.');
        qqq2 = qqq2.replace(/\s/g, '');

        setTimeout( function(){




        title1.staggerFromTo( qqq2+" span span" , 1.5,
            {ease: Back.easeOut.config(1.7), opacity: 0, bottom: 20, transform: "matrix(1, 1, 0, 1, 0, 0)"},
            {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,  transform: "matrix(1, 0, 0, 1, 0, 0)" }, 0.01);

        }, time);
            time += 500;

    /*animation(www);*/

    });
    });
    
    $(window).scroll(function(){
        
        if ($(window).scrollTop() > 50){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
        
        if (($('#dlya_chego').position().top/2) < $(window).scrollTop() && !is_word){
            $(".word_list").show();
            $(".word_list .item").lettering('words');
            $(".word_list .item span").lettering();
            is_word = true;
            var time = 500;

/*
    $cards.each(function() {
        setTimeout( function(){ addPositioningClass($(this)); }, time)
        time += 500;
    });
*/


    $('.word_list .item').each(function(i,elem) {

        var title1 = new TimelineMax();
        var qqq = $(this).attr('class');
        var qqq2;

        qqq2 = qqq.replace(/(^|\s)/g, '$1.');
        qqq2 = qqq2.replace(/\s/g, '');

        setTimeout( function(){




        title1.staggerFromTo( qqq2+" span span" , 1.5,
            {ease: Back.easeOut.config(1.7), opacity: 0, bottom: 20, transform: "matrix(1, 1, 0, 1, 0, 0)"},
            {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,  transform: "matrix(1, 0, 0, 1, 0, 0)" }, 0.01);

        }, time);
            time += 500;

    /*animation(www);*/

    });
        }
        
    });
});





$(document).ready(function() {


    






}, 1000);


function animation(www) {
    var title1 = new TimelineMax();
    var name_el = www;

    title1.staggerFromTo(www+" span span", 1.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: 20, transform: "matrix(1, 1, 0, 1, 0, 0)"},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,  transform: "matrix(1, 0, 0, 1, 0, 0)" }, 0.01);
}

/*function animation2() {
    var title2 = new TimelineMax();
    title2.staggerFromTo(".word_list .item_2 span span", 1.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: 20, transform: "matrix(1, 1, 0, 1, 0, 0)"},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,  transform: "matrix(1, 0, 0, 1, 0, 0)" }, 0.01);
}*/

/*function animation2() {
    var title1 = new TimelineMax();
    title1.to(".item_2 ", 0, {visibility: 'hidden', opacity: 0});
    title1.staggerFromTo(".item_2 ", 0.7,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: 20, transform: "matrix(1, 1, 1, 1, 0, 0)"},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,  transform: "matrix(1, 0, 0, 1, 0, 0)" }, 0.01);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}*/

/*
$(function(){
    $('.repeat').click(function(){
        var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){
            $(indicator).parent().addClass(classes);
        }, 20);
    });
});*/
