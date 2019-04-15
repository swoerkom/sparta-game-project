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
      // console.log(list[0]);
      // console.log("Wall");
      console.log("You can't move here");
      value = false;
      }
      else {
        value = true;

    }
}


///Player can only move if checkposition = true
//player can't move if checkposition = false

//Work out the future move

  // $("#character").css('top', position.top + 40 + 'px');

//MOVE CHARACTER
function moveCharacter() {

  $(document).keydown(function(e) {
      var position = $("#character").position();
      var value = true;
      // if (checkPosition(false)) {
      // if (checkPosition(true)) {

        switch(e.keyCode)
        {
          case 40: //DOWN
            $("#character").css('top', position.top + 20 + 'px');
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





      if checkPosition(false)


      checkPosition();
    //}
    endGame();
  //}
  })





});
