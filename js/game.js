class Game {
    constructor() {
      this.Startscreen = document.querySelector('#game-intro');
      this.gameScreen = document.querySelector('#game-screen');
      this.gameEndScreen = document.querySelector('#game-end');
      this.scoreElement = document.querySelector('#score');
      this.livesElement = document.querySelector('#lives'); 
      this.player = new Player(this.gameScreen, 500, 600, 75, 100, '../images/thor.png');
      this.gameLoopFrequency = Math.round(1000/60);    
      this.score = 0;
      this.lives = 5;
      this.gameIsOver = false;
      this.gameIntervalId = null;
      this.counter = 1;
    }
    
    start() {
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
      this.Startscreen.style.display = 'none';
      this.gameScreen.style.display = 'block';
    }
    
    gameloop() {
      this.update();
    }
    
    update() {
      console.log('this is the game update');
      this.player.move();
    }
    
    endGame() {
      console.log('game is over');
      this.gameIsOver = true; 
      this.player.element.remove();
      this.obstacles.forEach(obs => {
        obs.element.remove();
      });
      this.gameScreen.style.display = 'none';
      this.gameEndScreen.style.display = 'block';
    }
  }