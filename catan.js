$(document).ready(function() {
	$('#board-size').on('submit', function(e) {
		e.preventDefault();
		var x_count = $('#x').val();
		var y_count = $('#y').val();
		var tile_width = (100/x_count)/(0.75 + 0.25/x_count);
		var tile_height = (100/y_count)/(1 + 0.51/y_count);

		$('#gameboard').empty();
		for (x=0; x<x_count; x++) {
			for (y=0; y<y_count; y++) {
				x_position = (x*tile_width*0.75);
				y_position = (y*tile_height);
				if(isEven(x)) {
					y_position += tile_height*0.5;
				}
				$('#gameboard').append('<div class="tile" style="left: ' + x_position + '%; top: ' + y_position + '%; width: ' + tile_width + '%; height: ' + tile_height + '%;"></div>');
			}
		}
	})

	function isEven(n) {
  	return n == parseFloat(n)? !(n%2) : void 0;
	}
});
