///// GENERAL SETTINS /////
const FPS = 7;
///// MAP SETTINGS /////
const mapX = 16;
const mapY = 16;

///// PLAYER SETTINGS /////
let direction = 'right'; //start Direction
let startLength = 3;

///// KEYS ///////
let upKey = 'w', alternateUpKey = 'ArrowUp';
let downKey = 's', alternateDownKey = 'ArrowDown';
let rightKey = 'd', alternateRightKey = 'ArrowRight';
let leftKey = 'a', alternateLeftKey = 'ArrowLeft';
let pauseKey = 'Escape', alternatePauseKey = 'p';

///// LocalStorage //////
if(localStorage.getItem("upKey") != null) upKey = localStorage.getItem("upKey");
if(localStorage.getItem("downKey") != null) downKey = localStorage.getItem("downKey");
if(localStorage.getItem("leftKey") != null) leftKey = localStorage.getItem("leftKey");
if(localStorage.getItem("rightKey") != null) rightKey = localStorage.getItem("rightKey");
if(localStorage.getItem("alternateUpKey") != null) alternateUpKey = localStorage.getItem("alternateUpKey");
if(localStorage.getItem("alternateDownKey") != null) alternateDownKey = localStorage.getItem("alternateDownKey");
if(localStorage.getItem("alternateLeftKey") != null) alternateLeftKey = localStorage.getItem("alternateLeftKey");
if(localStorage.getItem("alternateRightKey") != null) alternateRightKey = localStorage.getItem("alternateRightKey");
if(localStorage.getItem("pauseKey") != null) pauseKey = localStorage.getItem("pauseKey");
if(localStorage.getItem("alternatePauseKey") != null) alternatePauseKey = localStorage.getItem("alternatePauseKey");