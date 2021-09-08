const canvas = document.getElementById("pong");
const ctx = canvas.getContext('2d');

function render(){
}

function game(){
}

let framePerSecond = 50;
let loop = setInterval(game,1000/framePerSecond);