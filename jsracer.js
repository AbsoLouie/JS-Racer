$(document).ready(function() {

  $(document).on('keyup', function(event) {

    if (event.which == 65) {
      update_player_position("player1_track")
    }

    if (event.which == 76) {
      update_player_position("player2_track")
    }

  })

  var update_player_position = function(player_track){
    $("." + player_track + " .active").removeClass("active").next().addClass("active")
  }



}) //end of ready