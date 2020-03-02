document.addEventListener("DOMContentLoaded",function(){
    var khoi=document.getElementsByClassName('khoi');
    
    for(var i=0;i<khoi.length;i++)
    khoi[i].onclick = function(){
        console.log('da click');
        
        if(this.classList[1]=='khoivang')
        {   
            this.classList.remove('khoivang');
            var ndhienlen = this.getAttribute('data-hienlen');
            var phantuhienra = document.getElementById(ndhienlen);
            phantuhienra.classList.remove('ra');
            hienlen.classList.remove('chayall');
            
            
        }
        else{
              for(var i=0;i<khoi.length;i++)
          khoi[i].classList.remove('khoivang');
        this.classList.toggle('khoivang');
        var ndhienlen = this.getAttribute('data-hienlen');
        var phantuhienra = document.getElementById(ndhienlen);
        var nd= document.getElementsByClassName('khoi2');
        for(var i=0;i<nd.length;i++)
        nd[i].classList.remove('ra');
        phantuhienra.classList.toggle('ra');
        

        }
      
        
    } 
           
    
    
    
},false)

$(document).ready(function () {
    $('.sao').click(function(){
        $('.danhgia2').addClass('radanhgia2');
    })
    // $('.khoi').click(function(){
    //     $('.all').toggleClass('chayall');
    // })
    // $('.khoivang').click(function(){
    //     $('.all').removeClass('chayall');
    // })
    $('.gia').click(function(){
        $('.gia2').toggleClass('chaygia2');
        $('.khoi2').removeClass('ra');
        // $('.all').toggleClass('chayall');
        $('.sanpham').toggleClass('chaysp')

    })
    TweenMax.staggerFrom($('.sanpham1'),0.6,{top:100,opacity:0},0.1);
    
    $('.loadthem').click(function(){
        $('.baotatca').addClass('chaybaotatca');
        $('.ndloadthem').addClass('ndra');
        TweenMax.staggerFrom($('.sanpham1'),0.6,{top:100,opacity:0},0.1);
        $(this).toggleClass('loadthemchay');
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
    
});