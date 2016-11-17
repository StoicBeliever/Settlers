$(document).ready(function() {
	$('#board-size').on('submit', function(e) {
		e.preventDefault();
		x = $('#x').val();
		y = $('#y').val();
		console.log('Setting an x and y of ' + x + ' and ' + y);
	})
});
