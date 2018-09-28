$(document).ready(function() {
	$('.pargress-wrapper .progress .progress-bar').css('width', function() {
		return $(this).attr('progress-val') + '%';
	});

	setTimeout(function () {
		$('#info-link').trigger('click');
	}, 1000);
});
