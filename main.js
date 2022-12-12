const game = document.getElementById("game");
const inputSettings = document.getElementById("inputSettings");
let isGamePaused = false;

function generateBoard() {
    for(let i=0; i<mapY; i++)
    {
        for(let j=0; j<mapX; j++)
        {
            tiles.push(new Tile(j,i));
        }
    }
    tiles.forEach(tile => { tile.update(); });
}
let pauseBackground;
function unPauseGame() {
    gameLoop = setInterval(function() {
        player.move();
    }, 200);
    pauseBackground.remove();
    inputSettings.hide();
    isGamePaused = false;
}
function pauseGame() {
    clearInterval(gameLoop);
    pauseBackground = new Background();
    pauseBackground.insertText("Pauza");
    pauseBackground.insertButton("Wróć do gry",unPauseGame);
    pauseBackground.insertButton("Sterowanie", () => {
        inputSettings.show();
    });
    isGamePaused = true;
}
function endGame() {
    clearInterval(gameLoop);
    pauseKey = '';
    const background = new Background();
    background.insertText("Przegrałeś! Twój wąż umarł...");
    background.insertButton("Spróbuj ponownie",() => { location.reload(); });
}

generateBoard();

const inputs = inputSettings.querySelectorAll("input");
inputs.forEach(input => {
    input.setAttribute("readonly",";");

    switch(input.getAttribute("value")) {
        case 'w': input.value = upKey; break;
        case 'ArrowUp': input.value = alternateUpKey; break;
        case 's': input.value = downKey; break;
        case 'ArrowDown': input.value = alternateDownKey; break;
        case 'a': input.value = leftKey; break;
        case 'ArrowLeft': input.value = alternateLeftKey; break;
        case 'd':input.value = rightKey; break;
        case 'ArrowRight': input.value = alternateRightKey; break;
        case 'Escape': input.value = pauseKey; break;
        case 'p': input.value = alternatePauseKey; break;
    }

    let isClick = false;
    let value = input.getAttribute("value");
    let previousValue = value;
    input.onfocus = () => {
        isClick = true;
        input.value = "<kliknij klawisz>";
    }
    input.onblur = () => {
        isClick = false;
        input.value = previousValue;
    }
    input.onkeydown = (e) => {
        if(!isClick) return;

        input.value = e.key;
        previousValue = e.key;
        let v = input.value;
        switch(value) {
            case 'w': upKey = v; localStorage.setItem("upKey",v); break;
            case 'ArrowUp': alternateUpKey = v; localStorage.setItem("alternateUpKey",v); break;
            case 's': downKey = v; localStorage.setItem("downKey",v); break;
            case 'ArrowDown': alternateDownKey = v; localStorage.setItem("alternateDownKey",v); break;
            case 'a': leftKey = v; localStorage.setItem("leftKey",v); break;
            case 'ArrowLeft': alternateLeftKey = v; localStorage.setItem("alternateLeftKey",v); break;
            case 'd': rightKey = v; localStorage.setItem("rightKey",v); break;
            case 'ArrowRight': alternateRightKey = v; localStorage.setItem("alternateRightKey",v); break;
            case 'Escape': pauseKey = v; localStorage.setItem("pauseKey",v); setTimeout(fixBindPauseKey, 1);  break;
            case 'p': alternatePauseKey = v; localStorage.setItem("alternatePauseKey",v); setTimeout(fixBindPauseKey, 1); break;
        }
    }    
});
inputSettings.querySelector("button").onclick = () => inputSettings.hide();
function fixBindPauseKey() {
    pauseGame();
    inputSettings.show();
}