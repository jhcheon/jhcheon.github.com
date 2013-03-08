function changeImage(target, name1, name2){
	//var	$img = target.find("img").eq(0),
	var $img = target,
		imgSrc;	
	if($img.attr("src").indexOf(name2) == -1){
		imgSrc = $img.attr("src").replace(name1, name2);	
	}
	else{
		return;
	}
	/*else{
		imgSrc = $img.attr("src").replace("on.", "off.");		
	}*/		
	$img.attr("src", imgSrc ); 
}

$(document).ready(function(){

	var broW;

	var sub_width = [-83, -83, -83, -93, -98];

	// GNB 시작
	for(var i = 0; i < $(".gnb > li > a").length; i++)
		$(".gnb > li > a").eq(i).css("background-position-y", (-28*i));
	

	for(var i = 0; i < $(".gnb_sub.sub1 > li > a").length; i++)
		$(".gnb_sub.sub1 > li > a").eq(i).css("background-position-y", (-24*i));	

	for(var i = 0; i < $(".gnb_sub.sub2 > li > a").length; i++)
		$(".gnb_sub.sub2 > li > a").eq(i).css("background-position-y", (-24*i));	
	
	for(var i = 0; i < $(".gnb_sub.sub3 > li > a").length; i++)
		$(".gnb_sub.sub3 > li > a").eq(i).css("background-position-y", (-24*i));

	for(var i = 0; i < $(".gnb_sub.sub4 > li > a").length; i++)
		$(".gnb_sub.sub4 > li > a").eq(i).css("background-position-y", (-24*i));

	for(var i = 0; i < $(".gnb_sub.sub5 > li > a").length; i++)
		$(".gnb_sub.sub5 > li > a").eq(i).css("background-position-y", (-24*i));
	



	$(".gnb > li").bind("mouseover focusin", function(e){		
		if( !$(this).hasClass("on") ){
			e.stopPropagation();
			$(this).siblings().removeClass("on");
			$(this).addClass("on");
			$(".gnb > li > a").css("background-position-x", 0);
			$(this).find("> a").css("background-position-x", -103);	
		}
	});

	$(".gnb > li").bind("focusout", function(e){		
		$(this).removeClass("on");
	});

	/*
	$(".gnb > li").bind("focusout", function(e){
		if( $(this).index() == 4)
		{
			$(this).removeClass("on");
			$(".gnb > li > a").css("background-position-x", "0px");
		}
	});
	*/	

	$(".gnb_sub > li").bind("mouseover focusin", function(e){
		if( !$(this).hasClass("on") ){
//			e.stopPropagation();
			$(this).siblings().removeClass("on");
			$(this).addClass("on");
			$(".gnb_sub > li > a").css("background-position-x", 0);
						
			$(this).find("> a").css("background-position-x", sub_width[ $(this).parent().parent().index() ] );
		}
	});

	$(".gnb_sub > li").bind("mouseout focusout", function(e){
		e.stopPropagation();
		$(this).removeClass("on");
		$(this).siblings().removeClass("on");
		$(".gnb_sub > li > a").css("background-position-x", 0);

		if( $(this).parent().parent().index() == 4 && $(this).index() == 3){
			$(this).parent().parent().removeClass("on");
			$(".gnb > li > a").css("background-position-x", 0);
		}
	});
	// GNB 끝
	
	// family 사이트 스크롤 시작
	var speed = 0 ;

	$(".familyBox > li").bind("focusin mouseover", function(e){
		if( $(this).hasClass("on") == false){
			changeImage( $(this).siblings().find(".tit"), "on", "off" );			
			$(this).siblings().removeClass("on").stop().animate({height:"10px"}, speed );
			$(this).addClass("on").stop().animate({height:"80px"}, speed ,function(){
				$(".familyBox").show() ;
			});
			changeImage( $(this).find(".tit"), "off", "on" );			
		}
	});

	function firstChkSet () {
		$(".familyBox").hide() ;
		$(".familyBox > li a").trigger( 'focus' ) ;
		$('.header_top > h1 a').trigger( 'focus' ) ;
		setTimeout ( function(){
			speed = 300 ;
		} , 1000 ) ;
	}
	firstChkSet () ;

//	$(".familyBox > li").bind("keydown", function(e){		
//		var keyCode = e.keyCode || e.which ;
//		if ( keyCode == 9 ) {
//			if ( e.shiftKey ) {
////				alert ( 'shift' ) ;
//			} else {
////				alert ( $(this).index() ) ;
//				var idx = $(this).index() ;
//				$(".familyBox > li").eq(idx).css({ 'position' : 'relative' , 'top' :'45px' }) ;
////				$(".familyBox > li").eq(idx+1).css({ 'position' : 'absolute' , 'top' :'75px' }) ;
//				$(".familyBox > li").eq(idx+1).css({ 'position' : 'absolute' , 'top' : '145px' }) ;
//				$(".familyBox > li").eq(idx+1).animate({ 'top' :'75px' }) ;
//				$(".familyBox > li").eq(idx).removeClass( 'on' ) ;
//				$(".familyBox > li").eq(idx+1).addClass( 'on' ) ;
//
////				$(".familyBox > li").eq(idx).animate({height:"10px"}, 300);
////				$(".familyBox > li").eq(idx+1).css({ 'position' : 'absolute' , 'top' :'75px' }) ;
////				alert ( 'tab' ) ;
//			}
//		}		
//	}) ;

//	$(".familyBox > li").bind("mouseover focusin", function(e){
//		
//		if( $(this).hasClass("on") == false){
//			
//			changeImage( $(this).siblings().find(".tit"), "on", "off" );
//			
//			$(this).siblings().removeClass("on").stop().animate({height:"10px"}, 300);
//			
//			$(this).addClass("on").stop().animate({height:"80px"}, 300);
//
//			changeImage( $(this).find(".tit"), "off", "on" );
//		}
//	});

	// family 사이트 스크롤 끝	

	//quick_menu 시작
	
	$(window).resize(function(){
		broW = $(window).width();

		if (broW < 960 )	$(".quick_menu").addClass('hidden');
		else				$(".quick_menu").removeClass('hidden');
		
	});

	//quick_menu 끝

	// 배너 애니메이트 시작
	var $banner = $('div.centerBanner3') ;	
	var banner_name = ".visual1 ";
	
	function aniHandler (str_visual) {
		$banner.find(str_visual + '.bg').fadeIn( 1500 ) ;
		$banner.find(str_visual + '.text').css({ 'right' : -$(window).width() }) ;
		$banner.find(str_visual + '.text').stop().animate({ 'right' : ($(window).width() / 2) - 450 } , 1700 , 'easeInOutQuint' ) ;
		$banner.find(str_visual + '.people').css({ 'left' : -429 }) ;
		$banner.find(str_visual + '.people').stop().animate({ 'left' : ($(window).width() / 2) - 180 } , 1200 , 'easeInOutQuint' ) ;
		
		//$banner.find('.people2').delay( 50 ).css({ 'right' : -$(window).width() }) ;
		//$banner.find('.people2').delay( 150 ).animate({ 'right' : ($(window).width() / 2) - 450 } , 750 , 'easeInOutQuint' ) ;
	}

	$(window).resize(function(){
		aniHandler ( banner_name );
	});
	
	aniHandler ( banner_name );

	$(".bannerArea a").bind("click", function(e){
		
		e.preventDefault();
		
		$('div.centerBanner3 ' + banner_name).css('display','none');
		
		if(banner_name != ".visual1 "){
			banner_name = ".visual1 ";
		}
		else{
			banner_name = ".visual2 ";
		}

		$('div.centerBanner3 ' + banner_name).css('display','block');
		$('div.centerBanner3 ' + banner_name + '.bg').css('display','none');

		aniHandler ( banner_name );
	});

	//배너 애니메이트 끝


});