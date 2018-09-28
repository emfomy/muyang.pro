$(document).ready(function() {
	$('.pargress-wrapper .progress .progress-bar').css('width', function() {
		return $(this).attr('progress-val') + '%';
	});

	setTimeout(function () {
		$('#one-inner-link').trigger('click');
	}, 1000);
});
