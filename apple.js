class Apple {
    constructor() {
        let id = Math.floor(Math.random()*freeTiles.length)
        tiles[freeTiles[id]].setSkin('green');
        tiles[freeTiles[id]].apple = true;
    }
}
let apple;
window.addEventListener("load",() => {
    apple = new Apple;
});