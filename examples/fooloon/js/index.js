class Fooloon extends Game{
    constructor(fps, width, height){
        super(fps, width, height);
        this.pistol = new Pistol("sprites/pistol.png", this, 0 ,240);
        this.entities.push(this.pistol);
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
        console.log(keyEvent.key);
    }
    keyUpHandler(keyEvent){
        this.pistol.yVelocity = 0; 
    }
}