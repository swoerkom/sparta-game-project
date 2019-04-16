$(function () {

var score = 0;
var gameEnd = false;
var walls = $(".wall");
var exit = $(".exit")
var item = $(".item");


$("#maze_container").hide()
$("#finish_screen").hide()
$("#game_buttons").hide()

function placeCharacter() {
  var character = '<div id="character"><div>';
  $("#maze").append(character);
}


function placeStars() {
  var floor = $(".floor")
  for (var i = 0; i < 6; i++) {
    var divCount = $(walls).length;
    var randomnumber=Math.floor(Math.random()*divCount);
    $(floor[randomnumber]).append('<img class="item coin" src="images/coin.png">');
  }

  for (var i = 0; i < 6; i++) {
    var divCount = $(walls).length;
    var randomnumber=Math.floor(Math.random()*divCount);
    $(floor[randomnumber]).append('<img class="item diamond" src="images/diamond.png">');
  }
  console.log(item);
}

//
// //Brings back position of all div WALL elements
// for (var i = 0; i < walls.length; i++) {
//   var x = $(walls[i]).offset();
//   console.log(walls);
// }

function endGame() {
  if ($(exit).offset().top  == $("#character").offset().top) {
    if ($(exit).offset().left == $("#character").offset().left) {
      gameEnd = true;
    }
  } else {
    gameEnd = false;
  }
}

function checkPosition() {
  var div = 'div.wall';
  var list = $("#character").collision("div.wall");
  var itemHit = $("#character").collision(".item");
    if (list[0] !== undefined) {
      return true;
    }
      else {
        return false;
    }
}

function checkItem() {
  var coinHit = $("#character").collision(".coin");
  var diamondHit = $("#character").collision(".diamond");
    if (coinHit[0] != undefined) {
      console.log("Coin hit");
      $(coinHit[0]).remove();
        score =+ 3;
        console.log(score);
    } if (diamondHit[0] != undefined) {
      console.log("Diamond Hit");
      $(diamondHit[0]).remove();
      score =+ 10;
      console.log(score);
    }
}

function playerScore() {
  if (score < 100) {
    $( ".stars" ).append('<h4>Well done, you won 3 stars!</h4>');
    $( ".stars" ).append('<img src="images/star.png"><img src="images/star.png"><img src="images/star.png">');
    if (score > 100 && score < 130) {
     $( ".stars" ).append('<h4>You won 2 stars, better luck next time!</h4>');
     $( ".stars" ).append('<img src="images/star.png"><img src="images/star.png">');
   }
  } else {
    $( ".stars" ).append('<h4>You only won 1 star, try harder!</h4>');
    $( ".stars" ).append('<img src="images/star.png">');

  }
  console.log("Player Score: "+score);
  console.log("Game over!");
  $("#finish_screen").show()
  $("#maze_container").hide()
  $("#game_buttons").hide()
  $(".restart-game").on("click", function () {
    $(character).remove();
    placeCharacter();
}) }

placeStars();


// $(".score").append('0').css("display","inline-block");
// $(".score.p").prepend("color","blue;");

// $(".score") = '<p> 0 </p>'

//MOVE CHARACTER
function moveCharacter(){
 $(document).keydown(function(e) {
    var position = $("#character").position();
    var value = true;
      switch(e.keyCode)
      {
        case 40: //DOWN
        $("#character").css('top', position.top + 20 + 'px');
        score++;
          break;
        case 38: //UP
          $("#character").css('top', position.top - 20 + 'px');
          score++;
          break;
        case 37: //LEFT
          $("#character").css('left', position.left - 20 + 'px');
          score++;;
          break;
        case 39: //RIGHT
          $("#character").css('left', position.left + 20 + 'px');
          score++;
          break;
        }

        $(".score").append('Score: ' +score).css("display","inline-block");
        $(".score").remove().css("display","inline-block");

          checkItem();
        if (checkPosition()) {
          $("#character").css('top', position.top + 'px');
          $("#character").css('left', position.left + 'px');
        }

    endGame();
    if (gameEnd == true) {
              playerScore();
    }

      })
}

  $(".start-button").on("click", function () { //Toggle hiding and showing maze
    $("#maze_container").show()
    $("#start-menu").hide()
    $("#game_buttons").show()
    $( ".stars" ).html("");
    $(character).remove();
    placeCharacter();
  })

  $(".play-again").on("click", function () {
    $( ".stars" ).html("");
    $(character).remove();
    placeCharacter();
    $("#maze_container").show()
    $("#finish_screen").hide()

  })

  $(".back-to-menu-button").on("click", function () { //Toggle hiding and showing maze
    $("#maze_container").hide()
    $("#start-menu").show()
    $("#finish_screen").hide()
    $("#game_buttons").hide()


  })

  $(".restart-game").on("click", function () {
    $(character).remove();
    placeCharacter();
  })

  $(".finish_screen").on("click", function () { //Toggle hiding and showing maze
    $("#finish_screen").show()

})




    placeCharacter();
    moveCharacter();


});
