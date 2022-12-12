let globalID = 0;
const tiles = [];
let freeTiles = [];

class Tile {
    constructor(posX, posY) {
        this.id = globalID;
        this.x = posX;
        this.y = posY;
        this.skin = 'white';
        this.div = document.getElementById("tile"+this.id);
        this.apple = false;

        this.init();
        freeTiles.push(this.id);
        globalID++;
    }
    init() { game.innerHTML += `<img src="img/${this.skin}.png" id='tile${globalID}'>`; }
    setSkin(skin) {
        this.skin = skin;
        this.div.setAttribute("src",`img/${this.skin}.png`);
    }
    getSkin() { return this.skin; }
    update() {
        this.div = document.getElementById("tile"+this.id);
    }
}
function findTile(x, y) {
    if(x == undefined || y == undefined) return;
    return y*16 + x;
}