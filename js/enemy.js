class Enemy {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.possiblePositions = [600, 500, 350, 200];
      this.top =
        this.possiblePositions[
          Math.floor(Math.random() * this.possiblePositions.length)
        ];
      this.left = 1350;
      this.width = 80;
      this.height = 120;
      this.element = document.createElement("img");
      this.element.src = "../images/ufo.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      this.gameScreen.appendChild(this.element);
      
    }
  
    Lasertimer(){
      console.log("in timer");

    setInterval(() => {
      console.log('timed');
      const laser = new Laser(this.gameScreen, this)
      myGame.lasers.push(laser)
    }, 2000);
  }
}
