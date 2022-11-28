let container = document.getElementById("container");
let dino = document.getElementById("dino")
let block = document.getElementById("block")
let road = document.getElementById("road")
let cloud = document.getElementById("cloud")
let score = document.getElementById("score")
let gameOver = document.getElementById("gameOver")


// declaring variable for score
let interval = null;
let interval1 = null;
let playerScore = 0;

// function for score

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b> ${playerScore} </b>`
}

//start Game

//interval = setInterval(scoreCounter, 200)
window.addEventListener("keydown", (start) => {
 //console.log(start);
 if(start.code == "Space" && playerScore <= 50)
 {
    gameOver.style.display = "none";
    block.classList.add("blockActive");
    road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
    cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

    //score
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);

 
 
}

})


// jump Your Character

window.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp")
    {
        if(dino.classList != "dinoActive")
        {
            dino.classList.add("dinoActive")

            //remove class after 0.5 seconde
            // le temps en millisecondes que le minuteur devra attendre avant que la fonction ou le code spécifié ne soit éxécuté 
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            },500);
        }
    }
})


// Game Over if Character hit the block

let result = setInterval(() =>{
    let dinobottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    // l'élement c'est dino et on va récupérer la valeur de la propriété bottom que contient ce sélecteurs "dino" CSS
    ///console.log("dinobottom" + dinobottom );

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    // l'élement c'est dino et on va récupérer la valeur de la propriété bottom que contient ce sélecteurs "dino" CSS
    //console.log("blockLeft" + blockLeft );
    if(dinobottom <= 28 && blockLeft >= 28 && blockLeft <= 145 )
    {
        //console.log("Game Over");
        
        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        block.classList.remove("blockrapideActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
       
        playerScore = 0
        clearInterval(interval);
        
    }
    
},10)

/*function accelerate(){
    

    }
}*/