$(document).ready(function() {
	$('.progress-wrapper .progress .progress-bar').css('width', function() {
		return $(this).attr('progress-val') + '%';
	});

	// setTimeout(function () {
	// 	$('#info-link').trigger('click');
	// }, 3000);
});

$('#nav-icons > li > a').mouseenter(function() {
  $('#nav-icons > div').text($('span', this).text());
});
$('#nav-icons > li > a').on('touchstart', function() {
  $(this).trigger('mouseenter');
});
$('#nav-icons').mouseleave(function() {
  $('#nav-icons > div').empty();
});
