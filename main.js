const canvas = document.getElementById("pong");
const ctx = canvas.getContext('2d');

const halfLine = {
    x : (canvas.width - 2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "WHITE"
}

function drawHalfLine(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRectangle(halfLine.x, halfLine.y + i, halfLine.width, halfLine.height, halfLine.color);
    }
}

function drawRectangle(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function render(){
    drawRectangle(0, 0, canvas.width, canvas.height, "#800");
    drawHalfLine();
}
function update(){

}

function game(){
    render();
    update();
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);