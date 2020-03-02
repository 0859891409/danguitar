$(document).ready(function () {
    $('.sao').click(function(){
        $('.danhgia2').addClass('radanhgia2');
    })
    $('.gia').click(function(){
        $('.gia2').toggleClass('chaygia2');
        // $('.baosanpham1').toggleClass('matbaosp1');
    })
    $('.locsp').click(function(){
        $('.baosanpham1').addClass('matbaosp1');
        $('.baosanpham3').addClass('chaybaosp3');
        $('.baosanpham2').removeClass('chaybaosp2');
        $('.gia3').addClass('hiengia3');
        $('.gia2').removeClass('chaygia2');

        // $('.gia2').removeClass('chaygia2');
        // $('.baosanpham2').addClass('chaybaosp2');
        TweenMax.staggerFrom($('.baotrum'),0.6,{top:100,opacity:0},0.1);
    })
    $('.locsp2').click(function(){
        $('.baosanpham1').addClass('matbaosp1');
        $('.baosanpham2').addClass('chaybaosp2');
        $('.baosanpham3').removeClass('chaybaosp3');
        $('.gia4').addClass('hiengia3');
        $('.gia2').removeClass('chaygia2');
        TweenMax.staggerFrom($('.baotrum'),0.6,{top:100,opacity:0},0.1);
    })
    $('.locsp3').click(function(){
        $('.baosanpham1').removeClass('matbaosp1');
        $('.baosanpham2').removeClass('chaybaosp2');
        $('.baosanpham3').removeClass('chaybaosp3');
        $('.gia4').removeClass('hiengia3');
        $('.gia3').removeClass('hiengia3');
        $('.gia2').removeClass('chaygia2');
        TweenMax.staggerFrom($('.baotrum'),0.6,{top:100,opacity:0},0.1);
    })
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
})