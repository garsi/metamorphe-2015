$(document).ready(function() {

$('.work-hp').hover(
	function(){
		$(this).find('.details').fadeOut(250);
		$(this).find('.caption').fadeIn(250);
	},
	function(){
		$(this).find('.caption').fadeOut(250);
		$(this).find('.details').fadeIn(250);
	}
);

});
