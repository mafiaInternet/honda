new WOW().init();

var count = 0;
$('.carousel-control-prev').click(function(){
  
    $('.carousel-indicators-config li').removeClass('active');
    if(count == 0){
        count = 4;
    }else{
        count--;
    }
    $('.carousel-indicators-config li').each(function(i){
        if(i == count){
            $(this).addClass('active');
        }
    })
})


// $('.carousel-indicators-config li').click(function(){
//     $('.carousel-indicators-config li').removeClass('active');
//     $(this).addClass('active');
// })

$('.carousel-control-next').click(function(){
    
    $('.carousel-indicators-config li').removeClass('active');
    if(count == 4){
        count = 0;
    }else{
        count++;
    }
    $('.carousel-indicators-config li').each(function(i){
        if(i == count){
            $(this).addClass('active');
        }
    })
})



$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop: 0},1000)
    
})

