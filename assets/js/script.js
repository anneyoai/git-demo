$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        920:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function(){
	$('#nav').find('div').eq(1).find('a').click(function(){
		$('#nav').find('div').eq(1).find('a').attr('class','');
		$(this).attr('class','btn-standard');
	});

    $("#mobile-nav").click(function(){
        $(".main-menu").toggle();
    });
	
	

	
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#totop').fadeIn();
		} else {
			$('#totop').fadeOut();
		}	




	});
		

	$('#totop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

    $('.blog-single a').attr('target', '_blank');

   
    	
});

