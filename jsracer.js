$(document).ready(function() {

  $(document).on('keyup', function(event) {
    if (event.which == 65) {
      update_player_position()
    }
  })

  var update_player_position = function(){
    $(".player1_track .active").removeClass("active").next().addClass("active")
  }



}) //end of ready