fullscreen();
$(window).resize(fullscreen);
$(window).show(headerParallax);

function fullscreen() {
	var masthead = $('.masthead');
	var windowH = $(window).height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
}

function headerParallax() {
	var st = 0;
	var headerScroll = $('.masthead h1');

	if (st < 500) {
		headerScroll.css('opacity', 0.4-st/1000);
		$('.masthead-arrow ').css('opacity', 0.4-st/250);
		headerScroll.css({
			'-webkit-transform' : 'translateY(' + st/7 + '%)',
			'-ms-transform' : 'translateY(' + st/7 + '%)',
			transform : 'translateY(' + st/7 + '%)'
		});
	}
}




$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});