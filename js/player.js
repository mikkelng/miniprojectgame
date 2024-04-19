   class Player {
    constructor(gameScreen, left, top, width, height) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height - 100;
      this.directionY = 0;
      this.element = document.createElement('img');
      this.element.src = '../images/thor.png';
      this.element.style.position = 'absolute';
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.gameScreen.appendChild(this.element);
      this.speed = 3;
    }
    move() {    
      // console.log("move")
        this.top += this.directionY;
        if (this.top < 200) {
          // console.log("in if")
          this.top = 200;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
          this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.top = `${this.top}px`;
      }
}