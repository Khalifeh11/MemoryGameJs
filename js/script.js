// on key down game starts 
// level 1: one sound activated 
// if player presses that box, move to level 2 else game over
var sounds = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"];

var divs = document.querySelectorAll(".btn");
var greenDiv = document.getElementById("green");
var redDiv = document.getElementById("red");
var yellowDiv = document.getElementById("yellow");
var blueDiv = document.getElementById("blue");

var title = document.getElementById("title");

var level = 1;
var gameOver = false;
var buttonsActivated = [];
var buttonsPressed = [];


// triggering random button activation on initial press
var index = Math.floor(Math.random() * sounds.length);
buttonsActivated.push(index);


document.addEventListener('keydown', function(){
    if (level == 1 || gameOver == true){
    var audio = new Audio(sounds[index])
    divs[index].classList.add("pressed");
    setTimeout(function(){
        divs[index].classList.remove("pressed");
    }, 200);
    audio.play();
    title.textContent = "Level 1" 
    gameOver = false;
    }
})




function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
  

// adding click event with audio to green button
greenDiv.addEventListener('click', greenPress)
function greenPress(){
    var greenAudio = new Audio("sounds/green.mp3")
    greenDiv.classList.add("pressed");
    setTimeout(function(){
        greenDiv.classList.remove("pressed");
    }, 200);
    greenAudio.play();
    buttonsPressed.push(0)
    for (var i = 0; i <buttonsActivated.length; i++){
        if (buttonsActivated.length == buttonsPressed.length){
            if (arrayEquals(buttonsPressed,buttonsActivated)){
                level++;
                buttonsPressed = [];
                title.textContent = "Level " + level 
                setTimeout(function(){
                    randomButton()
                }, 1000); 
            }else{
                buttonsPressed = [];
                buttonsActivated = [];
                level = 1;
                gameOver = true;
                title.textContent = "Game Over, press any key to restart";
                document.body.style.backgroundColor = "red";
                setTimeout(function(){
                    document.body.style.backgroundColor = "#68074f";
                }, 500); 
                index = Math.floor(Math.random() * sounds.length);
                buttonsActivated.push(index);
            }
        }
    }
}

// adding click event with audio to red button
redDiv.addEventListener('click', redPress)
function redPress(){
    var redAudio = new Audio("sounds/red.mp3")
    redDiv.classList.add("pressed");
    setTimeout(function(){
        redDiv.classList.remove("pressed");
    }, 200);
    redAudio.play();
    buttonsPressed.push(1)
    for (var i = 0; i <buttonsActivated.length; i++){
        if (buttonsActivated.length == buttonsPressed.length){
            if (arrayEquals(buttonsPressed,buttonsActivated)){
                level++;
                buttonsPressed = [];
                title.textContent = "Level " + level 
                setTimeout(function(){
                    randomButton()
                }, 1000); 
            }else{
                buttonsPressed = [];
                buttonsActivated = [];
                level = 1;
                gameOver = true;
                title.textContent = "Game Over, press any key to restart";
                document.body.style.backgroundColor = "red";
                setTimeout(function(){
                    document.body.style.backgroundColor = "#68074f";
                }, 500);
                index = Math.floor(Math.random() * sounds.length);
                buttonsActivated.push(index); 
            }
        }
    }
}

// adding click event with audio to yellow button
yellowDiv.addEventListener('click', yellowPress)
function yellowPress(){
    var yellowAudio = new Audio("sounds/yellow.mp3")
    yellowDiv.classList.add("pressed");
    setTimeout(function(){
        yellowDiv.classList.remove("pressed");
    }, 200);
    yellowAudio.play();
    buttonsPressed.push(2)
    for (var i = 0; i <buttonsActivated.length; i++){
        if (buttonsActivated.length == buttonsPressed.length){
            if (arrayEquals(buttonsPressed,buttonsActivated)){
                level++;
                buttonsPressed = [];
                title.textContent = "Level " + level 
                setTimeout(function(){
                    randomButton()
                }, 1000); 
            }else{
                buttonsPressed = [];
                buttonsActivated = [];
                level = 1;
                gameOver = true;
                title.textContent = "Game Over, press any key to restart";
                document.body.style.backgroundColor = "red";
                setTimeout(function(){
                    document.body.style.backgroundColor = "#68074f";
                }, 500); 
                index = Math.floor(Math.random() * sounds.length);
                buttonsActivated.push(index);
            }
        }
    }
}

// adding click event with audio to blue button
blueDiv.addEventListener('click', bluePress)
function bluePress(){
    var blueAudio = new Audio("sounds/blue.mp3")
    blueDiv.classList.add("pressed");
    setTimeout(function(){
        blueDiv.classList.remove("pressed");
    }, 200);
    blueAudio.play();
    buttonsPressed.push(3)
    for (var i = 0; i <buttonsActivated.length; i++){
        if (buttonsActivated.length == buttonsPressed.length){
            if (arrayEquals(buttonsPressed,buttonsActivated)){
                level++;
                buttonsPressed = [];
                title.textContent = "Level " + level 
                setTimeout(function(){
                    randomButton()
                }, 1000); 
            }else{
                buttonsPressed = [];
                buttonsActivated = [];
                level = 1;
                gameOver = true;
                title.textContent = "Game Over, press any key to restart";
                document.body.style.backgroundColor = "red";
                setTimeout(function(){
                    document.body.style.backgroundColor = "#68074f";
                }, 500); 
                index = Math.floor(Math.random() * sounds.length);
                buttonsActivated.push(index);
            }
        }
    }
}
function randomButton(){
        
    var randomIndex = Math.floor(Math.random() * sounds.length);
    var audio = new Audio(sounds[randomIndex])
    divs[randomIndex].classList.add("pressed");
    setTimeout(function(){
        divs[randomIndex].classList.remove("pressed");
    }, 200);
    audio.play();
    buttonsActivated.push(randomIndex);
    console.log(buttonsActivated)
}



