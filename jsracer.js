$(document).ready(function() {

  $(document).on('keyup', function(event) {
    if (check_win(".player1") || check_win(".player2")) {
      console.log("Game Over")
      reset()
    } else if (event.which == 65) {
      update_player_position(".player1")
      check_win(".player1")
    } else if (event.which == 76) {
      update_player_position(".player2")
      check_win(".player2")
    }
  })

  var update_player_position = function(player){
    $(player + "_track .active").removeClass("active").next().addClass("active")
  }

  var check_win = function(player) {
    if ($(player + "_track .active")[0] == $(player + "_track .end")[0]) {
      return true;
    }
    return false;
  }

  var reset = function() {
    $(".race_table ul .active").removeClass("active")
    $(".race_table ul li:first-child").addClass("active")
  }

}) //end of ready