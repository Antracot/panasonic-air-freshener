
$(document).ready(function() {

// $(window).on('load', function() {
// 	console.log('ok');
// });

//func change imges on first page 
$(".header .header_content").mouseover(function () {
	$(".header_content #img2").fadeIn(1000);
	});


// func for slider (page6)
$('.bxslider').bxSlider({
	pagerCustom: '#bx-pager',
	minSlides: 1,
  	maxSlides: 4,
  	slideWidth: 250,
  	slideMargin: 0,
  	moveSlides: 1,
  	infiniteLoop: true,
  	pager: true
	});

// func for slider (page4)
$('.bxslider2').bxSlider({
  pagerCustom: '#bx-pager2',
  slideWidth: 1200,
  slideMargin: 0,
  moveSlides: 1,
  infiniteLoop: true,
  pager: true
  });


});