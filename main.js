import { fieldView } from "./views/fieldView.js";
import { player } from "./models/player.js";
import { ball } from "./models/ball.js";

const canvas = document.getElementById("pong");
let buttonStart = document.querySelector('button');
let info1 = document.getElementById('winner'); 

let hit = new Audio();
let wall = new Audio();
let userScore = new Audio();
let comScore = new Audio();
let victory = new Audio();
let defeat = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
comScore.src = "sounds/comScore.mp3";
userScore.src = "sounds/userScore.mp3";
victory.src = "sounds/victory.mp3";
defeat.src = "sounds/defeat.mp3";

const field = new fieldView(canvas);
const player1 = new player(0,(canvas.height - 100)/2,10,100,0,"white");
const player2 = new player(canvas.width - 10,(canvas.height - 100)/2,10,100,0,"white");
const ball1 = new ball(canvas.width/2,canvas.height/2,10,5,5,"white");

canvas.addEventListener("mousemove", getMousePos);
function getMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    player1.y = parseInt(evt.clientY - rect.top - player1.heigth/2);
}   


function render(){
    field.drawRectangle(0, 0, canvas.width, canvas.height, "#800");
    field.drawHalfLine();
    field.drawRectangle(player1.x,player1.y,player1.width,player1.heigth,player1.color);
    field.drawRectangle(player2.x,player2.y,player2.width,player2.heigth,player2.color);
    field.drawCircle(ball1.x, ball1.y, ball1.radius, ball1.color);
    field.drawText(player1.score,canvas.width/4,canvas.height/5);
    field.drawText(player2.score,(canvas.width/4)*3,canvas.height/5);
}

function update(){
    if( ball1.x - ball1.radius < -20 ){
        player2.score++;
        comScore.play();
        ball1.resetBall();
    }else if( ball1.x + ball1.radius > canvas.width+20){
        player1.score++;
        userScore.play();
        ball1.resetBall();
    }

    ball1.x += ball1.velocityX;
    ball1.y += ball1.velocityY;
    player2.y += ((ball1.y-(player2.y+(player2.heigth/2)))*0.1);

    if(ball1.y - ball1.radius < 0 || ball1.y + ball1.radius > canvas.height){
        ball1.velocityY = -ball1.velocityY;
        wall.play();
    }

    if(ball1.x < player1.x && ball1.y > player1.y && ball1.y < player1.y+100){
        ball1.velocityX = -ball1.velocityX;
        ball1.speedExtra();
        hit.play();
    }
    else if (ball1.x > player2.x && ball1.y > player2.y && ball1.y < player2.y+100){
        ball1.velocityX = -ball1.velocityX;
        ball1.speedExtra();
        hit.play();
    } 
    
    if (player2.score>=3){
        ball1.resetBall();
        player1.score=0;
        player2.score=0;
        info1.innerText= "HASTA LA VISTA";
        defeat.play();
    } else if(player1.score >=3){
        info1.innerText = "FELCIDADES HUMANO HA GANADO!";
        victory.play();
    } else if(player1.score > 0 || player2.score > 0){
        info1.innerText = "";
    }
}

function game(){
    render();
    update();
}

let framePerSecond = 60;
let loop = setInterval(game,1000/framePerSecond); 

buttonStart.addEventListener('click', () => {

    ball1.resetBall();
    player1.score=0;
    player2.score=0;
});
