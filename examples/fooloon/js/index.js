class Fooloon extends Game{
    constructor(fps, width, height){
        super(fps, width, height);
        this.pistol = new Pistol("sprites/pistol.png", this, 0 ,240);
        this.entities.push(this.pistol);
        this.spawnBalloonFreq = 3;
    }
    keyDownHandler(keyEvent){
        switch(keyEvent.key){
            case " ":
                this.pistol.shoot();
                break;
            case "ArrowUp":
                this.pistol.yVelocity = -5;
                break;
            case "ArrowDown":
                this.pistol.yVelocity = 5;
                break;
        }
    }
    spawnEntities(){
        var floorTime = Math.floor(this.time);
        if ( floorTime!=this.lastSpawn && floorTime%this.spawnBalloonFreq==0){
            this.lastSpawn = floorTime;
            var balloon = new Balloon("sprites/balloon.png", this, Math.floor((Math.random() * (this.width-80*2)) + 80), this.height, -2);
            this.entities.push(balloon);
        }
    }
    keyUpHandler(keyEvent){
        this.pistol.yVelocity = 0; 
    }
}