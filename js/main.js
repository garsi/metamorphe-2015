$(document).ready(function() {

$('.gallery-item img').hover(
	function(){
		$(this).find('.details').fadeOut(250);
		$(this).find('.caption').fadeIn(250);
	},
	function(){
		$(this).find('.caption').fadeOut(50);
		$(this).find('.details').fadeIn(50);
	}
);

});
