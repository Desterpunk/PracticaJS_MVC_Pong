class ball{
    constructor(x,y,radius,velocityX,velocityY,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.color = color;
    }

    resetBall(){
        this.x = 300;
        this.y = 200;
        this.velocityX = 5;
        this.velocityY = 5;
    }

    speedExtra(){
        if(this.velocityX > 0){
            this.velocityX += 0.1;
        } else {
            this.velocityX -= 0.1;
        }
    }

}

export{ball};