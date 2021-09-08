import { fieldView } from "./views/fieldView.js";
import { player } from "./models/player.js";
import { ball } from "./models/ball.js";

const canvas = document.getElementById("pong");

const field = new fieldView(canvas);
const player1 = new player(0,(canvas.height - 100)/2,10,100,0,"white");
const player2 = new player(canvas.width - 10,(canvas.height - 100)/2,10,100,0,"white");
const ball1 = new ball(canvas.width/2,canvas.height/2,10,5,5,7,"white");

function render(){
    field.drawRectangle(0, 0, canvas.width, canvas.height, "#800");
    field.drawHalfLine();
    field.drawRectangle(player1.x,player1.y,player1.width,player1.heigth,player1.color);
    field.drawRectangle(player2.x,player2.y,player2.width,player2.heigth,player2.color);
    field.drawCircle(ball1.x, ball1.y, ball1.radius, ball1.color);
}
function update(){

}

function game(){
    render();
    update();
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);