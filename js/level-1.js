$(function () {

  var score = 0;
  var gameEnd = false;
  var walls = $(".wall");
  var exit = $(".exit");
  var item = $(".item");

  $("#maze_container").show();
  $("#finish_screen").hide();

  function placeCharacter() {
    var character = '<div id="character"><div>';
    $("#maze").append(character);
  }

  function placeStars() {
    var floor = $(".floor");
    for (var i = 0; i < 15; i++) {
      var divCount = $(walls).length;
      var randomnumber=Math.floor(Math.random()*divCount);
      $(floor[randomnumber]).append('<img class="item coin" src="images/coin.png">');
    }

    for (var i = 0; i < 10; i++) {
      var divCount = $(walls).length;
      var randomnumber=Math.floor(Math.random()*divCount);
      $(floor[randomnumber]).append('<img class="item diamond" src="images/diamond.png">');
    }
  }

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
        $(coinHit[0]).remove();
          score = score - 3;
      } if (diamondHit[0] != undefined) {
        $(diamondHit[0]).remove();
        score = score - 6;
      }
  }

  function playerScore() {
    $( ".stars" ).html('Your final score is: ' +score);
    if (score <= 60) {
      $( ".stars" ).append('<h4>Well done, you won 3 stars!</h4>');
      $( ".stars" ).append('<img src="images/star.png"><img src="images/star.png"><img src="images/star.png">');
  } else if (score > 60 && score <= 100) {
       $( ".stars" ).append('<h4>You won 2 stars, better luck next time!</h4>');
       $( ".stars" ).append('<img src="images/star.png"><img src="images/star.png"><img src="images/star-grey.png">');
  } else if (score > 100) {
      $( ".stars" ).append('<h4>You only won 1 star, try harder!</h4>');
      $( ".stars" ).append('<img src="images/star.png"><img src="images/star-grey.png"><img src="images/star-grey.png">');
    }
    $("#finish_screen").show();
    $("#maze_container").hide();
    $("#game_buttons").hide();
    $(".restart-game").on("click", function () {
      $(character).remove();
      placeCharacter();
  }) };

  placeStars();
  $(".score").append('Score: ' +score).css("display","inline-block");

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
          checkItem();
          if (checkPosition()) {
            $("#character").css('top', position.top + 'px');
            $("#character").css('left', position.left + 'px');
          } else {
            score++
          }
      $(".score").html('Score: ' +score);
      endGame();
      if (gameEnd == true) {
                playerScore();
      }
        })
  }

    $(".start-button").on("click", function () { //Toggle hiding and showing maze
      $("#maze_container").show();
      $("#start-menu").hide();
      $("#game_buttons").show();
      $( ".stars" ).html("");
      $(character).remove();
      placeCharacter();
    })

    $(".play-again").on("click", function () {
      $( ".stars" ).html("");
      $(character).remove();
      placeCharacter();
      $("#maze_container").show();
      $("#finish_screen").hide();
      $("#game_buttons").show();
    })

    $(".back-to-menu-button").on("click", function () { //Toggle hiding and showing maze
      $("#maze_container").hide();
      $("#start-menu").show();
      $("#finish_screen").hide();
      $("#game_buttons").hide();
      $("#how-to-play-screen").hide();
    })

    $(".restart-game").on("click", function () {
      $(character).remove();
      $(".item").remove();
      placeCharacter();
      placeStars();
      score =+ 0;
      $(".score").html('Score: ' +score);
    })

    $(".how-to-play-button").on("click", function() {
      $("#maze_container").hide();
      $("#start-menu").hide();
      $("#how-to-play-screen").show();
    })
      placeCharacter();
      moveCharacter();
});
