let myGame = new Game();

window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");


    startButton.addEventListener("click", function () {
      startGame();
    });
    restartButton.addEventListener('click',()=>{
        myGame.endGame();
      myGame = new Game();
         startGame();
    })  


    }

  
    function startGame() {
      console.log("start game");
      myGame.start();
      document.addEventListener("keyup", () => {
        defaultPlayerMovement();
      })
      document.addEventListener("keydown", (event) => {
        //console.log(event);
        const key = event.key;
        const possibleKeys = ["ArrowUp", "ArrowDown", " "];
        if (possibleKeys.includes(key)) {
            console.log("Arrow key pressed:", key);
            if (key === "ArrowDown") {
                myGame.player.directionY = myGame.player.speed;
            } else if (key === "ArrowUp") {
                myGame.player.directionY = -myGame.player.speed;

            }
          }

        }
    )
}
 
    
        function defaultPlayerMovement(){
            myGame.player.directionY = 0;
        }