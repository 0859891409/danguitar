$(document).ready(function () {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 550){
                  $('.khoitop').addClass('hienkhoitop');
              }
              else{
                  $('.khoitop').removeClass('hienkhoitop');  
              }      
});
// js click chuot hien bang tu van
$('.top').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    })
    $('.tuvan').click(function(){
        $(this).addClass('xoatuvan');
        $('.bangtuvan').addClass('hienbangtuvan')
    })
$('.iconclose').click(function(){
        $('.bangtuvan').removeClass('hienbangtuvan')
        $('.tuvan').removeClass('xoatuvan');
    })
         
});