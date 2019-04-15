$(function () {

var startMenu = '<div id="start_menu"><div>';
$("#maze_container").append(startMenu);

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


  // var offset = $('.wall').offset();
  // var x_pos = offset.left;
  // var y_pos = offset.top;
  // console.log(x_pos + " " + y_pos);

  //
  // for (var i = 0; i < walls.length; i++) {
  //     var me = walls[i];
  //     console.log(me.offset);
  // }



  // var walls = ".collider";
  //     var character = ".obstacle";
  //     var hits = $(character).collision(walls)
  //     var hits = $(colliders_selector).collision(obstacles_selector, { mode: "collision" /*etc*/ } )


});
