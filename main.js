import { fieldView } from "./views/fieldView.js";

const canvas = document.getElementById("pong");

function render(){
    const field = new fieldView(0, 0, canvas.width, canvas.height, "#800",canvas);
    field.drawRectangle(0, 0, canvas.width, canvas.height, "#800");
    field.drawHalfLine();
}
function update(){

}

function game(){
    render();
    update();
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);