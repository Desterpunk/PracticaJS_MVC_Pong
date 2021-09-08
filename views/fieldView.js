class fieldView{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    drawRectangle(x, y, w, h, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }
    
    drawHalfLine(){
        const halfLine = {
            x : (this.canvas.width - 2)/2,
            y : 0,
            height : 10,
            width : 2,
            color : "WHITE"
        }
        for(let i = 0; i <= this.canvas.height; i+=15){
            this.drawRectangle(halfLine.x, halfLine.y + i, halfLine.width, halfLine.height, halfLine.color);
        }
    }
}

export {fieldView}