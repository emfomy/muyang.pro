$(document).ready(function () {

	$('.button.top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	$('.button.bottom').click(function () {
		$("html, body").animate({
			scrollTop: scrollBottom = $(document).height() - $(window).height()
		}, 600);
		return false;
	});

});
