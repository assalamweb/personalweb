$(document).ready(function(){
    $('.home .nama span').each(function(i){
        setTimeout(function(){
            $('.home .nama span').eq(i).toggleClass('show')
        }, 200 * (i + 1))
    })
    $('.home').toggleClass('show');
    $('#menu').click(function(){
        $('.fa-bars').toggleClass('fa-times');
        $('header').toggleClass('toggle');
        $('.svg').toggleClass('remove');
        $('header .user .name span').each(function(i){
            setTimeout(function(){
                $('header .user .name span').eq(i).toggleClass('tampil')
            }, 200 * (i + 1))
        })
    })

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('header').removeClass('toggle');
    })

    $('.page-scroll').on('click', function(e){

        //ambil isi href
        var tujuan = $(this).attr('href')
        //tangkap elemen ybs
        
        var elementTujuan = $(tujuan);
        
        //pindahkan scroll
        $('html,body').animate({
    
            scrollTop: elementTujuan.offset().top 
        },1000,'swing');
    
        
        e.preventDefault();
    });
    $(window).scroll(function () {
        var wsScroll = $(this).scrollTop();
          if (wsScroll > $("#about").offset().top - 300) {
           
            $('.info').addClass('show');
            $(".box").each(function(i) {
                setTimeout(function(){
                    $('.about .row .counter .box').eq(i).addClass('show');
                }, 300 * (i + 1))
        })
          }else{
            $('.info').removeClass('show');
            $(".box").each(function(i) {
                setTimeout(function(){
                    $('.about .row .counter .box').eq(i).removeClass('show');
                }, 300 * (i + 1))
        })    
          }
        if(wsScroll > $('#education').offset().top - 300){
            $(".education .box-container .box").each(function(i) {
                setTimeout(function(){
                    $('.education .box-container .box').eq(i).addClass('show');
                }, 300 * (i + 1))
        })
        }else 
            $(".education .box-container .box").each(function(i) {
                setTimeout(function(){
                    $('.education .box-container .box').eq(i).removeClass('show');
                }, 300 * (i + 1))
        })
        
        if(wsScroll > $('#portfolio').offset().top -300){
            $(".portfolio .box-container .box").each(function(i) {
                setTimeout(function(){
                    $('.portfolio .box-container .box').eq(i).addClass('show');
                }, 400 * (i + 1))
                
            });
        }else{
            $(".portfolio .box-container .box").each(function(i) {
                setTimeout(function(){
                    $('.portfolio .box-container .box').eq(i).removeClass('show');
                }, 400 * (i + 1))
                
            });
        }
        if(wsScroll > $('#contact').offset().top - 300){
            $('.contact .row .content').addClass('show');
            $('.form').addClass('show');
        }else{
            $('.contact .row .content').removeClass('show');
            $('.form').removeClass('show');
        }
    })

    $("#success").click(function () {
        $(".notify").toggleClass("active");
        $("#notifyType").toggleClass("success");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("success");
        },2000);
      });
      
      $("#failure").click(function () {
        $(".notify").addClass("active");
        $("#notifyType").addClass("failure");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("failure");
        },2000);
      });

      $('.close').on('click', function(){
          $('#success').hide();
      })
    
});