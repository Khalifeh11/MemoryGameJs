var sounds = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"];

var divs = $(".btn");
var greenDiv = $(".green");
var redDiv = $(".red");
var yellowDiv = $(".yellow");
var blueDiv = $(".blue");

var title = $("#title");


var level = 1;
var gameOver = false;
var buttonsActivated = [];
var buttonsPressed = [];

// triggering random button activation on initial press
var index = Math.floor(Math.random() * sounds.length);
buttonsActivated.push(index);

//initial keydown event
$(document).keypress(function() {
   if (level == 1 || gameOver == true) {
      var audio = new Audio(sounds[index])
      divs[index].classList.add("pressed");
      setTimeout(function() {
         divs[index].classList.remove("pressed");
      }, 200);
      audio.play();
      title.text("Level 1");
      gameOver = false;
   }
})

// checks if arrays are equal
function arrayEquals(a, b) {
   return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

// adding click event with audio to green button
greenDiv.click(greenPress);
function greenPress() {
   var greenAudio = new Audio("sounds/green.mp3")
   greenDiv.addClass("pressed");
   setTimeout(function() {
   greenDiv.removeClass("pressed");
   }, 200);
   greenAudio.play();
   buttonsPressed.push(0)
   checker();
}

// adding click event with audio to red button
redDiv.click(redPress);

function redPress() {
   var redAudio = new Audio("sounds/red.mp3")
   redDiv.addClass("pressed");
   setTimeout(function() {
      redDiv.removeClass("pressed");
   }, 200);
   redAudio.play();
   buttonsPressed.push(1)
   checker();
}

// adding click event with audio to yellow button
yellowDiv.click(yellowPress);
function yellowPress() {
   var yellowAudio = new Audio("sounds/yellow.mp3")
   yellowDiv.addClass("pressed");
   setTimeout(function() {
      yellowDiv.removeClass("pressed");
   }, 200);
   yellowAudio.play();
   buttonsPressed.push(2)
   checker();
}


// adding click event with audio to blue button
blueDiv.click(bluePress);

function bluePress() {
   var blueAudio = new Audio("sounds/blue.mp3")
   blueDiv.addClass("pressed");
   setTimeout(function() {
      blueDiv.removeClass("pressed");
   }, 200);
   blueAudio.play();
   buttonsPressed.push(3)
   checker();
}

function randomButton() {
   var randomIndex = Math.floor(Math.random() * sounds.length);
   var audio = new Audio(sounds[randomIndex])
   divs[randomIndex].classList.add("pressed");
   setTimeout(function() {
      divs[randomIndex].classList.remove("pressed");
   }, 200);
   audio.play();
   buttonsActivated.push(randomIndex);
}

// checks if buttons pressed match buttons activated
function checker() {
   var gameOverSound = new Audio("sounds/wrong.mp3");
   for (var i = 0; i < buttonsActivated.length; i++) {
      if (buttonsActivated.length == buttonsPressed.length) {
         if (arrayEquals(buttonsPressed, buttonsActivated)) {
            level++;
            buttonsPressed = [];
            title.text("Level " + level)
            setTimeout(function() {
               randomButton()
            }, 1000);
         } else {
            gameOverSound.play();
            buttonsPressed = [];
            buttonsActivated = [];
            level = 1;
            gameOver = true;
            title.text("Game Over, press any key to restart");
            $("body").css("background-color", "red");
            setTimeout(function() {
               $("body").css("background-color","#68074f");
            }, 500);
            index = Math.floor(Math.random() * sounds.length);
            buttonsActivated.push(index);
         }
      }
   }
}









