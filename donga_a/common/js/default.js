function gnb(){
	var $header_wrap = $('div.header_wrap') ;
	var $sitemap_area = $('div.sitemap_area') ;
	var $btn_close = $sitemap_area.find('.btn_close') ;

	$header_wrap.find('li.sitemap').bind( 'click' , sitemapClickHandler ) ;
	function sitemapClickHandler () {
		$sitemap_area.css({ 'visibility' : 'visible' }) ;
		$header_wrap.css({ 'height' : $sitemap_area.height() + 32 }) ;
		$sitemap_area.find('.tit').trigger( 'focus' ) ;
	}

	$btn_close.bind( 'click focusout' , sitemapCloseHandler ) ;
	function sitemapCloseHandler () {
		$sitemap_area.css({ 'visibility' : 'hidden' }) ;
		$header_wrap.css({ 'height' : 'auto' }) ;
		$('ul.etc li.last > a').trigger ( 'focus' ) ;
	}

	

//	$sitemap_area
}


	/* gnb */


$(function(){
		var btn = $('.family_wrap h4 a img') ;
		var btn2 = $('.brand_wrap h4 a img') ;

		$('.family_wrap h4').bind('click' , familyClickHandler);
		function familyClickHandler(event){
			event.preventDefault();

			if ($('.family_wrap').hasClass('chkOn')){
				$('.btcont_wrap').stop().animate({height : 40+'px' , top : -40+'px'},{duration:200, easing:'swing' , complete:function(){
					btn.attr( 'src' , btn.attr('src').replace( '_on' , '_off' ) ) ;
					btn2.attr( 'src' , btn2.attr('src').replace( '_on' , '_off' ) ) ;
				}});
				$('.family_wrap').removeClass('chkOn');
			} else {
				wrapReset ( 'step1' ) ;
				$('.btcont_wrap').stop().animate({height : 317+'px' , top : -317+'px'},{duration:200, easing:'swing' , complete:function(){
					$('.family_wrap').addClass('chkOn');
					$('.brand_wrap').removeClass('chkOn');
				}});
				btn.attr( 'src' , btn.attr('src').replace( '_off' , '_on' ) ) ;
				btn2.attr( 'src' , btn2.attr('src').replace( '_on' , '_off' ) ) ;
			}
		};


		$('.brand_wrap h4').bind('click focusin' , brandClickHandler);
		function brandClickHandler(event){
			event.preventDefault();

			if ($('.brand_wrap').hasClass('chkOn')){
				$('.btcont_wrap').stop().animate({height : 40+'px' , top : -40+'px'},{duration:200, easing:'swing' , complete:function(){
					btn.attr( 'src' , btn.attr('src').replace( '_on' , '_off' ) ) ;
					btn2.attr( 'src' , btn2.attr('src').replace( '_on' , '_off' ) ) ;
//					$(this).find( '> dl' ).css({ 'border' : '10px solid red' }) ;
				}});
				$('.brand_wrap').removeClass('chkOn');
			} else {
				wrapReset ( 'step2' ) ;
				$('.brand_wrap dl').css({ 'visibility' : 'visible' }) ;
				$('.btcont_wrap').stop().animate({height : 317+'px' , top : -317+'px'},{duration:200, easing:'swing', complete:function(){
					$('.brand_wrap').addClass('chkOn');
				$('.family_wrap').removeClass('chkOn');
				}});
				btn.attr( 'src' , btn.attr('src').replace( '_on' , '_off' ) ) ;
				btn2.attr( 'src' , btn2.attr('src').replace( '_off' , '_on' ) ) ;
				
			}
		};

		$('.brand_wrap dd.last').bind('focusout' , brandOutHandler );
		function brandOutHandler () {
			$('.brand_wrap dl').css({ 'visibility' : 'hidden' }) ;
		}

		function wrapReset ( chk ) {
			if ( chk == 'step1' ) {
				var arr = [ 'block' , 'none' ] ;
			} else if ( chk == 'step2') {
				var arr = [ 'none' , 'block' ] ;
			}

//			( chk == 'step1' ) ? arr = [ 'block' , 'none' ] : arr = [ 'none' , 'block' ] ;

			$('.family_wrap').find('dl').css('display' , arr[0]);
			$('.brand_wrap').find('dl').css('display' , arr[1]);
		}

		$('.brand_wrap .bd3').find('dd').eq(3).bind('focusout' , closeFocusHandler);
		function closeFocusHandler(){
			$('.btcont_wrap').stop().animate({height : 40+'px' , top : -40+'px'},{duration:200, easing:'swing' , complete:function(){
					btn.attr( 'src' , btn.attr('src').replace( '_on' , '_off' ) ) ;
					btn2.attr( 'src' , btn2.attr('src').replace( '_on' , '_off' ) ) ;
				}});
				$('.brand_wrap').removeClass('chkOn');
		};

		$('.family_wrap .fm1').find('dt').bind('focusin' , openFocusHandler);
		function openFocusHandler(){
			btn.attr( 'src' , btn.attr('src').replace( '_off' , '_on' ) ) ;
			btn2.attr( 'src' , btn2.attr('src').replace( '_on' , '_off' ) ) ;
			wrapReset ( 'step1' ) ;
			$('.family_wrap').addClass('chkOn');
			$('.brand_wrap').removeClass('chkOn');
			$('.btcont_wrap').stop().animate({height : 317+'px' , top : -317+'px'},{duration:200, easing:'swing'});
		};

		$('.brand_wrap .bd1').find('dt').bind('focusin' , openFocusHandler2);
		function openFocusHandler2(){
			btn.attr( 'src' , btn.attr('src').replace( '_on' , '_off' ) ) ;
			btn2.attr( 'src' , btn2.attr('src').replace( '_off' , '_on' ) ) ;
			wrapReset ( 'step2' ) ;
			$('.brand_wrap').addClass('chkOn');
			$('.family_wrap').removeClass('chkOn');
			$('.btcont_wrap').stop().animate({height : 317+'px' , top : -317+'px'},{duration:200, easing:'swing'});
		};


	//$('.sitemap_area').css('display','none');
	$('.navi').css('display','block');
//	alert ( parseInt($('.navi').css('height')) ) ;
	var navH = parseInt($('.navi').css('height')) ;
	if ( navH <= 120 ) {
		$('.gnb_subWrap').css({ 'visibility' : 'hidden' }) ;
	}

	var now = false;

	var trace = $('.trace') ;

	$('.gnb_area > li > a').bind('click' , function(){
		$('.gnb_subWrap').css({ 'visibility' : 'visible' }) ;
		var idx = $('.gnb_area > li > a').index(this);
		$('.gnb_area > li > a').each(function(i){
			if (idx == i){
				$('.gnb_area .gnb_subWrap').css('display','none');
				$('.gnb_area .gnb_subWrap').eq(idx).css('display','block');
				$('.navi').animate({height : 373+'px'},{duration:300, easing:'swing'});
				now = true;
			} else {
			}
		});
	});

	$('.gnb_sub .btn_close').bind('click', function(){
		if (now == false){
			$('.navi').css('height' , 373+'px');
			now=true;
		} else if (now == true){
			$('.navi').animate({height : 120+'px'},{duration:300, easing:'swing'});
			$('.gnb_subWrap').css({ 'visibility' : 'hidden' }) ;
			var idx = $(this).closest('.gnb_subWrap').closest('li').index() ;
			$('.gnb_area > li').eq(idx).find('> a').trigger( 'focus' ) ;
		}

	});

	$('.gnb_sub .btn_close').eq(3).bind('focusout', function(){
		$('.navi').animate({height : 120+'px'},{duration:300, easing:'swing'});
	});

	$('h1').focusin(function(){
		$('html , body').scrollTop(0) ;
	});









	
	});

