const canvas = document.getElementById("pong");
const ctx = canvas.getContext('2d');

function drawRectangle(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function render(){
    drawRectangle(0, 0, canvas.width, canvas.height, "#800");
}
function update(){

}

function game(){
    render();
    update();
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);