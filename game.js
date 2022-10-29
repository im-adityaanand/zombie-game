// Iteration 1: Declare variables required for this game
let score = 0;
let speed = 4000;
let seconds = document.getElementById("timer").textContent;
const zombieDiv = document.querySelector("#game-body");

// Iteration 1.2: Add shotgun sound
const expAudio = new Audio("./assets/shotgun.wav");
expAudio.volume = 0.2;
zombieDiv.onclick = () => {
    expAudio.pause();
    expAudio.currentTime = 0;
    expAudio.play();
  };

// Iteration 1.3: Add background sound
const backgroundSound = new Audio("./assets/bgm.mp3");


// Iteration 1.4: Add lives
let lives = 4;

// Iteration 2: Write a function to make a zombie
function createZombie(){
    let num = Math.floor((Math.random()*6)+1);
    let myTimer = setTimeout(trigger, speed);
    
    zombieDiv.innerHTML+=`<img src='./assets/zombie-${num}.png' class='zombie-image' id='zombie'>`;
    let zombie = document.querySelector("#zombie");
    zombie.style.left = Math.random()*80+"vw";

    zombie.addEventListener("click", function(){
        destroyZombie(zombie);
        document.getElementById("score").textContent = score;
        zombie.remove();
        clearTimeout(myTimer);
    });
}

// Iteration 3: Write a function to check if the player missed a zombie
function trigger(){
    lives--;
    if(lives < 1){
        location.href = "./game-over.html";
    } else {
        console.log("triggered");
        zombie.remove();
        createZombie();
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroyZombie(element){
    // zombie.innerHTML = "";
    element.remove();
    score++;
    createZombie();
}

// Iteration 5: Creating timer
let timer = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds == 0) {
      clearInterval(timer);
      location.href = "./win.html";
    }
}, 1000);

// Iteration 6: Write a code to start the game by calling the first zombie
let started = false;
document.addEventListener("click", function(){
    if(!started){
        document.querySelector("h1").classList.add("na");
        document.querySelector(".not-started-bg").classList.add("na");
        started = true;
        backgroundSound.play();
        backgroundSound.loop = true;
        createZombie();
    } 
});  


// Iteration 7: Write the helper function to get random integer

// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
// }

