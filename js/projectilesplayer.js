class Zeusbolt {
    constructor(gameScreen, player) {
        this.player = player;
        this.gameScreen = gameScreen;
        this.width = 25;
        this.height = 15;
        this.top = this.player.top + this.player.height / 2;
        this.left = this.player.left + this.player.width;
        this.element = document.createElement("img");
        this.element.src = "../images/zeusbolt1.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
      }
    
      move() {
        this.left += 5;
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
      }
    }