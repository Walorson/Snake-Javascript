class Player {
    constructor(posX, posY) {
        this.length = startLength;
        this.x = posX;
        this.y = posY;
        this.lastMoves = [];
    }
    move() {
        let id = findTile(player.x, player.y);
        if(player.x < 0 || player.x > mapX-1 || player.y < 0 || player.y > mapY-1) {
            endGame();
            return;
        }
        tiles[id].setSkin('red');

        this.lastMoves.push(id); // If everything is fine - move one block forward
        let found = freeTiles.findIndex(element => element == id);
        freeTiles = freeTiles.delete(found);

        if(tiles[id].apple == true) { 
            tiles[id].apple = false;
            this.length++;
            apple = new Apple();
        }
        if(this.lastMoves.length > this.length) {
            tiles[this.lastMoves[0]].setSkin('white');
            freeTiles.push(this.lastMoves[0]);
            this.lastMoves.shift();
        }
        if(direction == 'right') player.x++;
        else if(direction == 'left') player.x--;
        else if(direction == 'up') player.y++;
        else if(direction == 'down') player.y--;

        ////// If collision with itself - DEAD //////
        for(let i=0; i<this.lastMoves.length-1; i++) {
            if(id == this.lastMoves[i]) {
                endGame();
                return;
            }
        }
    }
}
const player = new Player(5,5);
let gameLoop = setInterval(function() {
    player.move();
}, Math.round(1000/FPS));

window.addEventListener("keydown",(e) => {
    function checkVerticalAxis() {
        if(e.key == upKey || e.key == alternateUpKey) direction = "up";
        else if(e.key == downKey || e.key == alternateDownKey) direction = "down";
    }
    function checkHorizontalAxis() {
        if(e.key == rightKey || e.key == alternateRightKey) direction = "right";
        else if(e.key == leftKey || e.key == alternateLeftKey) direction = "left";
    }
    if(direction == 'right' || direction == 'left')
        checkVerticalAxis();
    else if(direction == 'up' || direction == 'down') 
        checkHorizontalAxis();

    if(e.key == pauseKey || e.key == alternatePauseKey) (isGamePaused) ? unPauseGame() : pauseGame();
});