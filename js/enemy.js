class Enemy{
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.possiblePositions = [100 , 300];
        this.left = this.possiblePositions[Math.floor(Math.random * this.possiblePositions.length)]
        this.top = -300;
        this.width = 125;
        this.height = 250;
        this.element = document.createElement('img');
        this.element.src =
        this.element.style.position = 'absolute';
        this.element.style.width = '${this.width}px';
        this.element.style.height = '${this.height}px';
        this.element.style.top = '${this.top}px';
        this.element.style.left = '${this.left}px';
        this.gameScreen.appendChild(this.element);
    }
}