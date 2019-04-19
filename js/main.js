$(function () {
  var score = 0;
  var gameEnd = false;
  var walls = $(".wall");
  var exit = $(".exit");
  var item = $(".item");

  //Hide elements on launch
  $("#level-menu").hide();
  $("#finish_screen").hide();
  $("#game_buttons").hide();
  $("#how-to-play-screen").hide();
  $("#game_buttons").show();

  //Place character on maze board
  function placeCharacter() {
    var character = '<div id="character"><div>';
    $("#maze").append(character);
  }

  //Place gold coins and diamonds on maze board
  function placeItems() {
    var floor = $(".floor");
    for (var i = 0; i < 15; i++) {
      var divCount = $(walls).length;
      var randomnumber=Math.floor(Math.random()*divCount);
      $(floor[randomnumber]).append('<img class="item coin" src="images/coin.png">');
    }
      for (var i = 0; i < 10; i++) {
        var randomnumber=Math.floor(Math.random()*divCount);
        $(floor[randomnumber]).append('<img class="item diamond" src="images/diamond.png">');
      }
      for (var i = 0; i < 7; i++) {
        var randomnumber=Math.floor(Math.random()*divCount);
        $(floor[randomnumber]).append('<img class="spider" src="images/spider.png">');
      }
  }

  //End game when player reaches exit div
  function endGame() {
    if ($(exit).offset().top  == $("#character").offset().top) {
      if ($(exit).offset().left == $("#character").offset().left) {
        gameEnd = true;
      }
    } else {
      gameEnd = false;
      }
  }

  //Check player position using jQuery Collison plugin
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

  //Check player position, if they have hit a diamond or gold coin
  function checkItem() {
    var coinHit = $("#character").collision(".coin");
    var diamondHit = $("#character").collision(".diamond");
      if (coinHit[0] != undefined) {
        $(coinHit[0]).remove();
          score = score - 3;
          $('<p class="game_message">Coin Hit -3 points!</p>').appendTo("#maze_container").hide().fadeToggle(500);
      } if (diamondHit[0] != undefined) {
        $(diamondHit[0]).remove();
        $('<p class="game_message">Diamond Hit -6 points!</p>').appendTo("#maze_container").hide().fadeToggle(500);

        score = score - 6;
      }
    //If they have hit a spider
    var spiderHit = $("#character").collision(".spider");
    if (spiderHit[0] != undefined) {
      $(spiderHit[0]).remove();
      $('<p class="game_message">Spider Hit +10 points!</p>').appendTo("#maze_container").hide().fadeToggle(500);

      score = score + 10;
      }

      $( ".game_message" ).fadeOut( "100", function() {
    });
}



  //Displays player score on finish
  function playerScore() {
    $(".stars").append('Score: ' +score).css("display","inline-block");
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
    $("#game_buttons").hide();
    $("#maze_container").hide();
  }

  //MOVE CHARACTER
  function moveCharacter() {
   $(document).keydown(function(e) {
      var position = $("#character").position();
      var value = true;
        switch(e.keyCode) {
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
        if (gameEnd === true) {
          $(character).remove();
          playerScore();
        }
   })
  }

  //Game buttons
  $(".start-button").on("click", function () {
    $("#level-menu").show();
    $("#start-menu").hide();
    $("#game_buttons").hide();
  })

  $(".back-to-menu-button").on("click", function () {
    $("#start-menu").show();
    $("#finish_screen").hide();
    $("#how-to-play-screen").hide();
    $("#level-menu").hide();
    $("#game_buttons").hide();
  })

  $(".restart-game").on("click", function () {
    $(character).remove();
    $(".item").remove();
    placeCharacter();
    placeItems();
    score =+ 0;
    $(".score").html('Score: ' +score);
  })

  $(".how-to-play-button").on("click", function() {
    $("#start-menu").hide();
    $("#how-to-play-screen").show();
  })

  placeItems();
  $(".score").append('Score: ' +score).css("display","inline-block");
  placeCharacter();
  moveCharacter();

});
