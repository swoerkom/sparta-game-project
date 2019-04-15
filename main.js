$(function () {

function placeCharacter() {
  var character = '<div id="character"><div>';
  $("#maze").append(character);
}

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

function checkPosition() {
  var div = 'div.wall';
  var list = $("#character").collision("div.wall");
    if (list[0] !== undefined) {
      return true;
    }
      else {
        return false;
    }
}

//MOVE CHARACTER
function moveCharacter(){
 $(document).keydown(function(e) {
    var position = $("#character").position();
    var value = true;
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

        if (checkPosition()) {
          $("#character").css('top', position.top + 'px');
          $("#character").css('left', position.left + 'px');
        }
    endGame();
  })
}


  $(".start-button").on("click", function () { //Toggle hiding and showing maze
    $("#maze_container").addClass("active");
    $("#start-menu").addClass("hidden");


  })

  $(".back-to-menu-button").on("click", function () { //Toggle hiding and showing maze
    $("#start-menu").removeClass("hidden");
    $("#maze_container").removeClass("active");

  })

  $(".restart-game").on("click", function () {
    placeCharacter();
    console.log("test");
  })

placeCharacter();
moveCharacter();

});
