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


// triggering random button activation on press
var index = Math.floor(Math.random() * sounds.length);
document.addEventListener('keydown', function(){
    var audio = new Audio(sounds[index])
    divs[index].classList.add("pressed");
    setTimeout(function(){
        divs[index].classList.remove("pressed");
    }, 200);
    audio.play();
})

// adding click event with audio to green button
greenDiv.addEventListener('click', function(){
    var greenAudio = new Audio("sounds/green.mp3")
    greenDiv.classList.add("pressed");
    setTimeout(function(){
        greenDiv.classList.remove("pressed");
    }, 200);
    greenAudio.play()
})

// adding click event with audio to red button
redDiv.addEventListener('click', function(){
    var redAudio = new Audio("sounds/red.mp3")
    redDiv.classList.add("pressed");
    setTimeout(function(){
        redDiv.classList.remove("pressed");
    }, 200);
    redAudio.play()
})

// adding click event with audio to yellow button
yellowDiv.addEventListener('click', function(){
    var yellowAudio = new Audio("sounds/yellow.mp3")
    yellowDiv.classList.add("pressed");
    setTimeout(function(){
        yellowDiv.classList.remove("pressed");
    }, 200);
    yellowAudio.play()
})

// adding click event with audio to blue button
blueDiv.addEventListener('click', function(){
    var blueAudio = new Audio("sounds/blue.mp3")
    blueDiv.classList.add("pressed");
    setTimeout(function(){
        blueDiv.classList.remove("pressed");
    }, 200);
})




