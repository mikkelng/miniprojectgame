class Laser {
    constructor(gameScreen, enemy) {
        this.enemy = enemy;
        this.gameScreen = gameScreen;
        this.width = 25;
        this.height = 15;
        this.top = this.enemy.top + this.enemy.height / 2;
        this.left = this.enemy.left - this.enemy.width;
        this.element = document.createElement("img");
        this.element.src = "../images/laser.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
      }
    
      move() {
        this.left += -3;
        this.updatePosition();
        console.log("moving");
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        console.log("updating");
      }
    }