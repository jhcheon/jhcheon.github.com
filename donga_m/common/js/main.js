$(document).ready(function(){
	slide();
	gnb();
	gnb2();
});

function gnb(){
	var $target = $('.header'),
		$btn = $('.gnb').children('p');

	$btn.bind('click', function(){
		//console.log(imgWidth, index);
		if($target.height() < 402){
			changeImage($(this),'off.','on.')
			$target.stop().animate({'height':402},500, function(){
				myScroll.refresh();	
			});
		}
		else{
			changeImage($(this),'on.','off.')
			$target.stop().animate({'height':156},500, function(){
				myScroll.refresh();	
			});
		}
		myScroll.refresh();	
	});
}

function gnb2(){
	var $target = $('.family'),
		$btn = $('.btn_family');

	$btn.bind('click', function(){
		//console.log(imgWidth, index);
		if($target.height() < 288){
			changeImage($(this),'off.','on.')
			$target.stop().animate({'height':288},500, function(){
				myScroll.refresh();	
			});
		}
		else{
			changeImage($(this),'on.','off.')
			$target.stop().animate({'height':0},500, function(){
				myScroll.refresh();	
			});
		}		
		myScroll.refresh();	
	});
} 

function slide(){
	var	$target = $('.visual'),
		$slide = $target.children('ul'),
		$btn = $target.children('.btn_set').children(),
		index, imgWidth;
	
	$btn.bind('click', function(){
		$btn.removeClass();
		$(this).addClass('on');	
		index = $(this).index();
		imgWidth = $slide.children('li').eq(index).width();
		//console.log(imgWidth, index);
		$slide.animate({'left':-(imgWidth*(index))});
	});
}


function changeImage(target){
	var	$img = target.find("img").eq(0),
		imgSrc;	
	if($img.attr("src").indexOf("_on") == -1){
		imgSrc = $img.attr("src").replace("off.", "on.");	
	}
	else{
		imgSrc = $img.attr("src").replace("on.", "off.");		
	}		
	$img.attr("src", imgSrc ); 
}