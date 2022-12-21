class Game{
    constructor(fps=100,width=800,height=480){
        this.width = width;
        this.height = height;
        this.gameBox = document.getElementById("gamebox");
        this.gameBox.style["position"] = "fixed";
        this.gameBox.style["width"] = "800px";
        this.gameBox.style["height"] = "480px";
        this.gameBox.style["backgroundColor"] = "#00015a";
        this.gameBox.style["align-self"] = "center";
        this.gameBox.style["margin"] = "auto";
        this.gameBox.style["overflow"] = "hidden";
        this.fps = fps;
        this.entities = [];
        this.delay = 1000/this.fps;
    }
    renderScreen(){
        //clear screen
        this.gameBox.innerHTML = null;
        //draw all objects in the screen
        for (var i=0; i<this.entities.length; i++){
            var entity = this.entities[i];
            //don't draw out of bound objects.
            if(entity.xPos<-1000 || entity.xPos>this.width+1000
            || entity.yPos<-1000 || entity.yPos>this.height+1000){
                this.entities.splice(i,1);
                continue;
            }
            var entityDrawn = document.createElement("div");
            entityDrawn.style["position"] = "absolute";
            var img = document.createElement("img");
            img.src = entity.sprite;
            entityDrawn.appendChild(img);
            entityDrawn.style.marginLeft = entity.xPos;
            entityDrawn.style.marginTop = entity.yPos;
            this.gameBox.appendChild(entityDrawn);
        }
    }
    eventLoop(){
        for (var i=0; i<this.entities.length; i++){
            var entity = this.entities[i];
            entity.applyPhysics(this);
        }
        this.renderScreen();
    }
    start(windowctx){
        windowctx.setInterval(this.eventLoop.bind(this),this.delay);
        windowctx.addEventListener('keydown', this.keyDownHandler.bind(this));
        windowctx.addEventListener('keyup', this.keyUpHandler.bind(this));
    }
}