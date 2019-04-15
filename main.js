$(function () {
var character = '<div id="character"><div>';
$("#maze").append(character);


var exit = $(".exit")
//Brings back position of all div WALL elements
var walls = $(".wall");
for (var i = 0; i < walls.length; i++) {
  var x = $(walls[i]).offset();
  // console.log(x);
}

function endGame() {
  if ($(exit).offset().top  == $("#character").offset().top) {
    if ($(exit).offset().left == $("#character").offset().left) {
      alert("END");
    }
  }
}

function checkPosition(value) {
  var div = 'div.wall';
  var list = $("#character").collision("div.wall");
    if (list[0] !== undefined) {
      console.log("You can't move here");
    }
      else {
        value = true;
        console.log("You can move here");
    }
}
//MOVE CHARACTER
  $(document).keydown(function(e) {
    var value = true;
    var list = $("#character").collision("div.wall");

    // if (checkPosition(false)) {
    // if (checkPosition(true)) {
    var position = $("#character").position();

    if (list[0] !== undefined) {
      console.log("You can't move here");
} else {



//Get position of character
//Get position of where they want to move to on key press
//Get position of divs
//Compare positions. If the same movement = false
//If different, allow movement 

      switch(e.keyCode)
      {
        case 40: //DOWN
        var down = $("#character").css('top', position.top + 20 + 'px');
        var div = 'div.wall';

          if down = div.wall
          break;
        case 38: //UP
          $("#character").css('top', position.top - 20 + 'px');
          break;
        case 37: //LEFT
          $("#character").css('left', position.left - 20 + 'px');
          break;
        case 39: //RIGHT
          $("#character").css('left', position.left + 20 + 'px');
          break;
      }
    }
      // checkPosition();
      if (checkPosition(true)) {
        console.log(test);
        $("#character").css('top', position.top - 20 + 'px');
      }
    //}
    endGame();
  //}
  })

});
