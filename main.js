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
  if ($(exit).offset().top - 1 == $("#character").offset().top) {
    if ($(exit).offset().left - 1 == $("#character").offset().left) {
      alert("END");
    }
  }
}

//MOVE CHARACTER
  $(document).keydown(function(e) {

    var position = $("#character").position();
    switch(e.keyCode)
    {
      case 40: //DOWN
        $("#character").css('top', position.top + 21 + 'px');
        break;
      case 38: //UP
        $("#character").css('top', position.top - 21 + 'px');
        break;
      case 37: //LEFT
        $("#character").css('left', position.left - 21 + 'px');
        break;
      case 39: //RIGHT
        $("#character").css('left', position.left + 21 + 'px');
        break;

    }

      endGame();


     {

    }


    // if ($(exit).offset().top) == $("#character")).offset().top)){
    //   alert("END");



  })





});
