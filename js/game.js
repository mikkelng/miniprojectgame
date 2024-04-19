

  class Game {
    constructor() {
      this.Startscreen = document.querySelector('#game-intro');
      this.gameScreen = document.querySelector('#game-screen');
      this.gameEndScreen = document.querySelector('#game-end');
      this.scoreElement = document.querySelector('#score');
      this.livesElement = document.querySelector('#lives'); 
      this.player = new Player(this.gameScreen, 500, 600, 75, 100, '../images/thor.png');
      this.gameLoopFrequency = Math.round(1000/60);    
      this.enemies = [];
      this.lasers = [];
      this.score = 0;
      this.lives = 5;
      this.gameIsOver = false;
      this.gameIntervalId = null;
      this.counter = 1;
    }
    
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.display = 'block';
      const enemy =  new Enemy(this.gameScreen)
      this.enemies.push(enemy)
      enemy.Lasertimer();
      this.gameIntervalId = setInterval(() => {
        this.gameloop();

         }, this.gameLoopFrequency);
        
 
        }
    gameloop() {
      // console.log("gameloop")
      this.update();

      for (let i = 0; i < this.enemies.length; i++) {
        const oneLaser = this.lasers[i];
        console.log(this.lasers);
         oneLaser.move();

  //       if (this.player.didCollide(oneLaser)) {

  //         console.log("OEI");
  //         this.lasers.splice(i, 1);
  //         i--;
  //         oneLaser.element.remove();

  //         this.lives--;
  //         this.livesElement.innerText = this.lives;
  //         if (this.lives === 0) {
  //           this.endGame();
  //         }
      // }
  }
}
    
    update() {
      console.log('this is the game update');
      this.player.move();
    }
    
    endGame() {
      console.log('game is over');
      this.gameIsOver = true; 
      this.player.element.remove();
      this.enemies.forEach(obs => {
         obs.element.remove();
       });
 
      this.gameScreen.style.display = 'none';
      this.gameEndScreen.style.display = 'block';
    }
}