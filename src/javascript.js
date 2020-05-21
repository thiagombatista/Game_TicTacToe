var round = 1;
var game_matrix = Array(3);

game_matrix['a'] = Array(3);
game_matrix['b'] = Array(3);
game_matrix['c'] = Array(3);

game_matrix['a'][1] = 0;
game_matrix['a'][2] = 0;
game_matrix['a'][3] = 0;

game_matrix['b'][1] = 0;
game_matrix['b'][2] = 0;
game_matrix['b'][3] = 0;

game_matrix['c'][1] = 0;
game_matrix['c'][2] = 0;
game_matrix['c'][3] = 0;


$(document).ready( function(){

    $('.squares').click( function(){

		var id_clicked_div = this.id;
        play(id_clicked_div);
    });
    
    function play(id) {
        var icon = '';
        var div_point = '';
        var line_column = id.split('-');

        if ( (round % 2) == 1 ) {
            icon = "url('../assets/images/marcacao_1.png')";
            div_point = -1;
        } else {
            icon = "url('../assets/images/marcacao_2.png')";
            div_point = 1;
        }

        // check if the div wasn't already clicked
        if (game_matrix[line_column[0]][line_column[1]] == 0) {
            game_matrix[line_column[0]][line_column[1]] = div_point;
            round++;
            $('#' + id).css('background-image', icon);
            check_winner();
        } else {
            return;
        }

    }

    function check_winner() {
        var check_points;

        // check lines
        check_points = 0;
        for(var i = 1; i <=3; i++){
            check_points = check_points + game_matrix['a'][i];
        }
        winner(check_points);

        check_points = 0;
        for(var i = 1; i <=3; i++){
            check_points = check_points + game_matrix['b'][i];
        }
        winner(check_points);

        check_points = 0;
        for(var i = 1; i <=3; i++){
            check_points = check_points + game_matrix['c'][i];
        }
        winner(check_points);

        // check columns
        check_points = 0;
        for(var i = 1; i <=3; i++){
            check_points = game_matrix['a'][i] +
                           game_matrix['b'][i] +
                           game_matrix['c'][i];

            winner(check_points);
        }

        // check diagonals
        check_points = 0;
        check_points = game_matrix['a'][1] +
                       game_matrix['b'][2] +
                       game_matrix['c'][3];
        winner(check_points);

        check_points = 0;
        check_points = game_matrix['a'][3] +
                       game_matrix['b'][2] +
                       game_matrix['c'][1];
        winner(check_points);
                
    }

    function winner(points){
		if(points == -3){
			var play1 = $('#player1').val();
			modal_click(play1 + ' is the winner !');
			$('.squares').off();
		
		} else if(points == 3){
			var play2 = $('#player2').val();
			modal_click(play2 + ' is the winner !');
			$('.squares').off();
		}
	}

});

function start_game() {
    // checks names
    var name1 = document.getElementById('player1').value;
    var name2 = document.getElementById('player2').value;

    // checks filled names
    if (name1 == '' || name2 == '') {
        modal_click('Fill the players names !');
        return;
    }

    document.getElementById('name_player1').innerHTML = name1;
    document.getElementById('name_player2').innerHTML = name2;

    // changes visibilities
    document.getElementById('setting_game').style.display = "none";
    document.getElementById('gamming').style.display = "inline-flex";

    // Get the <span> element that closes the modal
    var sp2an = document.getElementsByClassName("squares");

    // When the user clicks on <span> (x), close the modal
    sp2an.onclick = function() {
        alert('asdf');
        modal_click('text');
    }
    

}

function modal_click(text) {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Change modal style to be displayed
    modal.style.display = "block";

    document.getElementById('modal_text').innerHTML = text;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}