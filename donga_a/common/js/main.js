window.onload = function(){
	slide($('.main_view'), $('.main_view'));
	foot();
}

$(window).resize(function(){
	slide($('.main_view'), $('.main_view'));
});


function slide(taget, parent){		
		var	target = taget,
			parent = parent,
			$imageList = target.children('li'),
			imgPos,imgWidth,index=1,	
			$btn = $('.play_btn > span > a');
		
		var winWidth = $(window).width();
		$imageList.css({'left': winWidth, 'width':winWidth});

		$imageList.eq(0).css({'left':(parent.width() - $(this).width())/2});

		$btn.bind("click", function(){
			if($imageList.is(':animated') == false){
				moveOut($imageList.eq(index-1).find('img'),parent);
			 	if($(this).parent().hasClass('prev') == true){
			 		index = index-1;	
			 		if(index <= 0){
			 			index = 2;
			 		}
			 		changeImage($btn, 'on.', 'off.');	 	
			 		changeImage($btn.eq(index), 'off.', 'on.');	 	
			 	}
			 	else if($(this).parent().hasClass('next') == true){
			 		index = index+1;	
			 		if(index > 2){
			 			index = 1;
			 		}
			 		changeImage($btn, 'on.', 'off.');	 	
			 		changeImage($btn.eq(index), 'off.', 'on.');	 	
			 	}
			 	else{
			 		index = $(this).parent().index();	
			 		changeImage($btn, 'on.', 'off.');	 	
			 		changeImage($(this), 'off.', 'on.');	 	
			 	}
			 	moveOn($imageList.eq(index-1).find('img'),parent);
			 }
		});

		function moveOn(target, parent){
			target.each(function(){											
				$(this).parent().stop().animate({'left':0}, 1000);					
			});
		}

		function moveOut(target, parent){
			target.each(function(){			
				$(this).parent().stop().animate({'left':-winWidth}, 1000, function(){
					$(this).css({'left': winWidth});
				});					
			});
		}
	}

	function changeImage(target, name1, name2){
	target.find("img").each(function(){
		var	imgSrc;	
			if($(this).attr("src").indexOf(name2) == -1){
				imgSrc = $(this).attr("src").replace(name1, name2);	
			}
			else{
				return;
			}
			/*else{
				imgSrc = $img.attr("src").replace("on.", "off.");		
			}*/		
			$(this).attr("src", imgSrc ); 
		});
	}

	
	function foot(){
		var $target = $('.pr_wrapArea'),
			$target2 = $('.wrap')
			$btnFoot = $('.foot_on'),
			$btnHome = $('.foot_out'),
			chkW = $(window).width(),
			chkH = $(window).height(),
			_speed = 500 ;

		$target.css({'left': chkW , 'width' : chkW });
		$target.css({ 'display' : 'none' }) ;

//		alert ( $target.height() + ' | ' + chkH ) ;

		$btnFoot.bind('click', function(e){
			e.preventDefault();
			
			if ( chkH > $target.height() ) {
				$('html , body').css({ 'overflow-y' : 'hidden' }) ;
			}

			$target.css({ 'display' : 'block' }) ;
			$target2.stop().animate({ 'left' : -chkW } , _speed ) ;
			$target.stop().animate({ 'left' : 0 } , _speed , function(){
				$btnHome.trigger( 'focus' ) ;
			}) ;

		});

		$btnHome.bind('click', function(e){
			e.preventDefault();
			$('html , body').css({ 'overflow-y' : 'auto' }) ;

			$target2.stop().animate({ 'left' : 0 } , _speed ) ;
			$target.stop().animate({ 'left' : chkW } , _speed ) ;
		});

	}