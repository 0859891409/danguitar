$(document).ready(function () {
    $('.menu ul li:nth-child(2) a').click(function(e){
        e.preventDefault();
        console.log('da click');
        
        $('html,body').animate({scrollTop: $('.phan2').offset().top},1000);
    })
    $('.menu ul li:nth-child(3) a').click(function(e){
        e.preventDefault();
        console.log('da click');
        
        $('html,body').animate({scrollTop: $('.phan5').offset().top},1000);
    })
    $('.menu ul li:nth-child(4) a').click(function(e){
        e.preventDefault();
        console.log('da click');
        
        $('html,body').animate({scrollTop: $('.phan6').offset().top},1000);
    })
    // click vào nút top chạy về đầu và cuộn chuột hiện khối top
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
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250){
           
            $('.navbar').addClass('doimaunavbar');

        }
        else{
           
            $('.navbar').removeClass('doimaunavbar');
        }
       
        if ($(this).scrollTop() > 550){
            $('.khoitop').addClass('hienkhoitop');
          

        }
        else{
            $('.khoitop').removeClass('hienkhoitop');
            
        }
        if ($(this).scrollTop() > 500){
           
            $('._2').addClass('doimaunavlink');

        }
        else{
           
            $('._2').removeClass('doimaunavlink');
        }
        if ($(this).scrollTop() > 2000){
           
            $('._2').removeClass('doimaunavlink');

        }
        
        if ($(this).scrollTop() > 2000){
           
            $('.sp').addClass('doimaunavlink');

        }
        else{
           
            $('.sp').removeClass('doimaunavlink');
        }
        if ($(this).scrollTop() > 2400){
           
            $('.sp').removeClass('doimaunavlink');

        }
        if ($(this).scrollTop() > 2500){
           
            $('._3').addClass('doimaunavlink');

        }
        else{
           
            $('._3').removeClass('doimaunavlink');
        }
        
    });
    // js cho hiện bảng đăng kí
    var b = setInterval(function(){ 
         $('.bangtuvan').addClass('hienbangtuvan');
         clearInterval(b);
}, 2500);
    
   
});
